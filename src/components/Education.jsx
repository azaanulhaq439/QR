import React from 'react'
import { FaGraduationCap, FaAward } from 'react-icons/fa'

export default function Education() {
  const education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: 'Abdul Wali Khan University',
      period: '2020 – 2024',
      location: 'Mardan, Pakistan',
      details: 'Comprehensive CS curriculum covering algorithms, databases, software engineering, and networking'
    },
    {
      degree: 'Intermediate in Computer Science (ICS)',
      institution: 'Punjab College',
      period: '2018 – 2020',
      location: 'Pakistan',
      details: 'Foundation in mathematics, physics, computer science, and English communication'
    }
  ]

  const certifications = [
    {
      title: 'Cyber Threat Management',
      issuer: 'Cisco Networking Academy',
      date: '2025',
    },
    {
      title: 'IT Specialist - JavaScript',
      issuer: 'Pearson Vue',
      date: '2024',
    },
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      date: '2025',
    },
    
    {
      title: 'Full Stack Development',
      issuer: 'NAVTTC (National Vocational & Technical Training Commission)',
      date: '2024',
    }
  ]

  return (
    <section id="education" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Education & Certifications</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <FaGraduationCap className="text-accent text-lg" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="card">
                  <div className="mb-3">
                    <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
                    <p className="text-accent font-medium">{edu.institution}</p>
                    <p className="text-slate-500 text-sm">{edu.location}</p>
                  </div>
                  <p className="text-slate-400 text-sm mb-3">{edu.period}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <FaAward className="text-accent text-lg" />
              </div>
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="card">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className="text-lg font-bold text-white flex-1">{cert.title}</h4>
                    <span className="text-xs text-accent font-medium whitespace-nowrap">{cert.date}</span>
                  </div>
                  <p className="text-slate-300 font-medium mb-2">{cert.issuer}</p>
                  <p className="text-slate-500 text-xs">ID: {cert.credentialId}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
