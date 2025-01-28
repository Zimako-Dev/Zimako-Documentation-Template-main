const fs = require('fs');
const path = require('path');

// Map of file paths to doc IDs
const FILE_TO_DOC_MAP = {
  'src/pages/Architecture.tsx': 'architecture',
  'src/pages/Introduction.tsx': 'introduction',
  'src/pages/Installation.tsx': 'installation',
  'src/pages/QuickStart.tsx': 'quickstart',
  'src/pages/Configuration.tsx': 'configuration'
};

// Read the docs data file
const docsPath = path.join(__dirname, '../src/data/docs.ts');
const docsContent = fs.readFileSync(docsPath, 'utf8');

// Get the modified files from git diff
const getModifiedFiles = () => {
  const { execSync } = require('child_process');
  try {
    const diff = execSync('git diff --name-only HEAD@{1} HEAD').toString();
    return diff.split('\n').filter(Boolean);
  } catch (error) {
    console.error('Error getting modified files:', error);
    return [];
  }
};

// Update the dates in the docs data
const updateDates = () => {
  const modifiedFiles = getModifiedFiles();
  const today = new Date().toISOString().split('T')[0];
  let updatedContent = docsContent;

  modifiedFiles.forEach(file => {
    const docId = FILE_TO_DOC_MAP[file];
    if (docId) {
      // Update the lastUpdated date for the modified file's corresponding doc
      const regex = new RegExp(`(id:\\s*['"]${docId}['"].*?lastUpdated:\\s*['"]).*?(['"])`, 'gs');
      updatedContent = updatedContent.replace(regex, `$1${today}$2`);
    }
  });

  // Only write if there were changes
  if (updatedContent !== docsContent) {
    fs.writeFileSync(docsPath, updatedContent, 'utf8');
    console.log('Updated last modified dates for:', modifiedFiles.filter(f => FILE_TO_DOC_MAP[f]));
  }
};

updateDates();
