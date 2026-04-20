import React from 'react'
import { FaCode, FaTools, FaLightbulb } from 'react-icons/fa'

export default function Skills() {
  const skillCategories = [
    {
      icon: FaCode,
      title: 'Technical Skills',
      skills: [
        'React.js & React Hooks',
        'Node.js & Express',
        'Python & Tkinter',
        'MongoDB & SQL',
        'REST APIs',
        'HTML/CSS/Tailwind',
        'JavaScript ES6+',
        'Git & Version Control'
      ]
    },
    {
      icon: FaTools,
      title: 'Tools & Platforms',
      skills: [
        'Jira & Confluence',
        'Azure DevOps',
        'GitHub & GitLab',
        'VS Code',
        'Postman (API Testing)',
        'MongoDB Atlas',
        'Firebase',
        'Docker (Basic)'
      ]
    },
    {
      icon: FaLightbulb,
      title: 'Core Strengths',
      skills: [
        'Agile/Scrum Methodology',
        'Product Thinking',
        'Automation & Optimization',
        'Stakeholder Communication',
        'Problem Solving',
        'System Design',
        'Digital Transformation',
        'Technical Documentation'
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div key={index} className="card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon className="text-accent text-xl" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                </div>

                <ul className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      <span className="text-slate-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Additional Skills Context */}
        <div className="mt-12 p-6 border border-accent/30 rounded-lg bg-accent/5">
          <p className="text-slate-300 leading-relaxed">
            <span className="text-accent font-semibold">Specialization:</span> Product-driven engineering with focus on automation, agile delivery, and digital transformation in enterprise environments. Experienced in banking sector with strong understanding of compliance, security, and operational requirements.
          </p>
        </div>
      </div>
    </section>
  )
}
