import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { TableOfContents } from './components/TableOfContents';
import { SearchProvider } from './hooks/useSearch';
import { Introduction } from './pages/Introduction';
import { Installation } from './pages/Installation';
import { QuickStart } from './pages/QuickStart';
import { Architecture } from './pages/Architecture';
import { Configuration } from './pages/Configuration';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import './styles/prism-custom.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <SearchProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <Header onMenuClick={() => setSidebarOpen(true)} />
          
          {/* Mobile sidebar */}
          <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? '' : 'hidden'}`}>
            {/* Overlay */}
            <div 
              className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm"
              onClick={() => setSidebarOpen(false)}
            />
            
            {/* Sidebar */}
            <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-white dark:bg-gray-800 p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Navigation</h2>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              <Navigation mobile onNavigate={() => setSidebarOpen(false)} />
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="flex flex-col lg:flex-row lg:space-x-8 py-8">
                {/* Desktop sidebar */}
                <div className="hidden lg:block lg:w-64 shrink-0">
                  <div className="sticky top-20">
                    <Navigation />
                  </div>
                </div>
                
                {/* Main content */}
                <main className="flex-1" role="main">
                  <div className="px-1 sm:px-4">
                    <Routes>
                      <Route path="/docs/introduction" element={<Introduction />} />
                      <Route path="/docs/installation" element={<Installation />} />
                      <Route path="/docs/quickstart" element={<QuickStart />} />
                      <Route path="/docs/architecture" element={<Architecture />} />
                      <Route path="/docs/configuration" element={<Configuration />} />
                      <Route path="/" element={<Introduction />} />
                    </Routes>
                  </div>
                </main>
                
                {/* Table of Contents - Desktop */}
                <div className="hidden xl:block xl:w-64 shrink-0">
                  <div className="sticky top-20">
                    <TableOfContents />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </SearchProvider>
  );
}

export default App;