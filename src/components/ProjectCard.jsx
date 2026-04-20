import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

export default function ProjectCard({ project }) {
  return (
    <div className="card group h-full flex flex-col">
      {/* Header */}
      <div className="mb-4 pb-4 border-b border-slate-600">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Impact - Most Important */}
      <div className="mb-4 p-3 bg-accent/10 rounded-lg border border-accent/30">
        <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-1">Impact</p>
        <p className="text-sm text-slate-200 font-medium">
          {project.impact}
        </p>
      </div>

      {/* Highlights */}
      <div className="mb-4 flex-1">
        <ul className="space-y-2">
          {project.highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
              <FaCheckCircle className="text-accent mt-0.5 flex-shrink-0" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="pt-4 border-t border-slate-600">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
