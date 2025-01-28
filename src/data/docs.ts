export interface DocPage {
  id: string;
  title: string;
  content: string;
  url: string;
  lastUpdated: string;
}

export const docs: DocPage[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: `Welcome to our documentation. This guide will help you understand our platform and get started quickly.
    Here you'll find comprehensive guides and documentation to help you start working with our platform as quickly as possible.`,
    url: '/docs/introduction',
    lastUpdated: '2025-01-28'
  },
  {
    id: 'installation',
    title: 'Installation',
    content: `Learn how to install and set up our platform. We'll guide you through the prerequisites and installation steps
    to ensure you have everything set up correctly.`,
    url: '/docs/installation',
    lastUpdated: '2025-01-28'
  },
  {
    id: 'quickstart',
    title: 'Quick Start',
    content: `Get up and running quickly with our quick start guide. This guide will walk you through the basics
    and help you create your first project.`,
    url: '/docs/quickstart',
    lastUpdated: '2025-01-28'
  },
  {
    id: 'architecture',
    title: 'Architecture',
    content: `Understanding the core architecture of our platform. Our platform follows a modular, microservices-based architecture designed for scalability and maintainability.

    Core Components:
    - Core Engine: Handles the fundamental operations and business logic
    - API Layer: RESTful and GraphQL interfaces for data access
    - Authentication: Secure user authentication and authorization
    - Data Layer: Efficient data storage and retrieval systems

    Design Principles:
    - Separation of Concerns
    - SOLID Principles
    - DRY (Don't Repeat Yourself)
    - Dependency Injection

    System Requirements:
    - Node.js runtime environment
    - Container orchestration support`,
    url: '/docs/architecture',
    lastUpdated: '2025-01-28'
  },
  {
    id: 'configuration',
    title: 'Configuration',
    content: `Learn about the various configuration options available. This guide covers all the settings
    and customization options you can use to tailor the platform to your needs.`,
    url: '/docs/configuration',
    lastUpdated: '2025-01-28'
  },
  // Add more documentation pages here
];
