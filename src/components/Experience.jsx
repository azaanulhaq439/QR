import React from 'react'
import { FaBriefcase } from 'react-icons/fa'

export default function Experience() {
  const experiences = [
    {
      title: 'Science & Engineering Associate',
      company: 'UBL (United Bank Limited)',
      period: '2025 – Present',
      location: 'Islamabad, Pakistan',
      highlights: [
        'Agile product delivery using Jira & Confluence workflows',
        'User story creation and requirements analysis',
        'Squad tracking, visibility, and cross-functional coordination',
        'Automation & digitization initiatives for operational efficiency',
        'UAT (User Acceptance Testing) coordination and go-live management',
        'Stakeholder management and requirement documentation'
      ]
    },
    {
      title: 'IT Officer',
      company: 'Ezdaan Associates SMC Pvt Ltd',
      period: '2024 – 2025',
      location: 'Islamabad, Pakistan',
      highlights: [
        'IT infrastructure management and system administration',
        'Network troubleshooting and technical support',
        'Data backup, disaster recovery, and business continuity planning',
        'Software deployment and system monitoring',
        'Hardware maintenance and vendor coordination',
        'User training and documentation'
      ]
    },
    {
      title: 'MERN Stack Developer',
      company: 'Actim Solutions Pvt Ltd',
      period: '2023 – 2024',
      location: 'Islamabad, Pakistan',
      highlights: [
        'Full-stack development with React, Node.js, and MongoDB',
        'REST API design and implementation',
        'Database optimization and query performance',
        'Authentication and authorization systems',
        'Responsive web design and UI/UX implementation',
        'Git version control and Agile development practices'
      ]
    }
  ]

  return (
    <section id="experience" className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((job, index) => (
            <div key={index} className="card group">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <FaBriefcase className="text-accent text-lg" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white">{job.title}</h3>
                    <span className="text-sm text-accent font-medium">{job.period}</span>
                  </div>
                  <p className="text-slate-300 font-medium">{job.company}</p>
                  <p className="text-slate-500 text-sm">{job.location}</p>
                </div>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-disc list-inside">
                {job.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-slate-300 text-sm leading-relaxed pl-2">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
