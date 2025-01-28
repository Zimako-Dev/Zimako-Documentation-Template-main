import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface NavigationProps {
  mobile?: boolean;
  onNavigate?: () => void;
}

const navItems = [
  { name: 'Getting Started', items: [
    { name: 'Introduction', href: '/docs/introduction' },
    { name: 'Installation', href: '/docs/installation' },
    { name: 'Quick Start', href: '/docs/quickstart' },
  ]},
  { name: 'Core Concepts', items: [
    { name: 'Architecture', href: '/docs/architecture' },
    { name: 'Configuration', href: '/docs/configuration' },
  ]},
];

export function Navigation({ mobile, onNavigate }: NavigationProps) {
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className={`${mobile ? '' : 'sticky top-20'}`}>
      <ul className="space-y-8">
        {navItems.map((section) => (
          <li key={section.name}>
            <h2 className="font-semibold text-gray-900 dark:text-white mb-4">
              {section.name}
            </h2>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.href}
                    onClick={onNavigate}
                    className={({ isActive }) =>
                      `block px-3 py-2 text-sm transition-colors rounded-md ${
                        isActive
                          ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400'
                          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}