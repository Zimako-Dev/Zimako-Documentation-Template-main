import React from 'react';
import { LastUpdated } from '../components/LastUpdated';
import { ContentEditor } from '../components/ContentEditor';
import { useDocStore } from '../hooks/useDocContent';

export function Architecture() {
  const docs = useDocStore((state) => state.docs);
  const pageData = docs.find(doc => doc.id === 'architecture');

  if (!pageData) return null;

  return (
    <div className="prose dark:prose-invert prose-indigo max-w-none">
      <h1>Architecture</h1>
      <LastUpdated date={pageData.lastUpdated} />
      
      <ContentEditor
        id={pageData.id}
        content={pageData.content}
        className="lead"
      />
    </div>
  );
}