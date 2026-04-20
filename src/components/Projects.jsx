import React from 'react'
import ProjectCard from './ProjectCard'
import { FaCode } from 'react-icons/fa'

export default function Projects() {
  const projects = [
    {
      title: 'Timesheet Automation System',
      description: 'Automated timesheet processing and cost calculation system reducing manual data entry effort',
      tech: ['Python', 'Tkinter', 'CSV Processing'],
      impact: 'Reduced manual effort by 80% and eliminated calculation errors',
      highlights: [
        'Automated CSV processing and parsing',
        'Real-time cost calculations',
        'User-friendly desktop interface',
        'Report generation'
      ]
    },
    {
      title: 'QR Code Verification System',
      description: 'Document verification platform using QR codes to prevent fraud and ensure authenticity',
      tech: ['QR Code Generation', 'Database Integration', 'Web Platform'],
      impact: 'Enhanced document security and reduced fraudulent transactions',
      highlights: [
        'Unique QR code generation per document',
        'Real-time verification system',
        'Audit trail and logging',
        'Integration with UBL systems'
      ]
    },
    {
      title: 'Arabic Localization Initiative',
      description: 'Multi-region localization project supporting RTL languages and cultural adaptation for UAE market',
      tech: ['RTL Design', 'Translation Management', 'Localization'],
      impact: 'Improved UX compliance and market reach in MENA region',
      highlights: [
        'Full RTL support implementation',
        'Language switching functionality',
        'Cultural UI/UX adaptations',
        'Translation management system'
      ]
    },
    {
      title: 'Branvia E-commerce Platform',
      description: 'Full-stack e-commerce solution with authentication, shopping cart, and product management',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      impact: 'Complete online platform supporting 500+ products and 1000+ users',
      highlights: [
        'User authentication and authorization',
        'Product catalog with advanced filtering',
        'Shopping cart and checkout',
        'Order management and payment processing',
        'Responsive mobile-first design'
      ]
    }
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Featured Projects</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-4">Want to see more projects?</p>
          <a
            href="https://github.com/azaanulhaq439"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-primary"
          >
            <FaCode /> Visit GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
