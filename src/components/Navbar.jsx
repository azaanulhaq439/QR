import React, { useState } from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm border-b border-slate-700 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white font-bold text-xl hover:text-accent transition-colors"
            >
              AUH
            </button>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-white transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-slate-300 hover:text-white transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-slate-300 hover:text-white transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-slate-300 hover:text-white transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('education')} className="text-slate-300 hover:text-white transition-colors">
              Education & Certifications
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-white transition-colors">
              Contact
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="mailto:azaanulhaq439@gmail.com" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm">
              <FaEnvelope size={16} />
              <span>Email</span>
            </a>
            <a href="tel:+923209359822" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm">
              <FaPhone size={16} />
              <span>Call</span>
            </a>
            <button onClick={() => scrollToSection('contact')} className="btn-primary text-sm">
              Get in Touch
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-6 border-t border-slate-700 space-y-1">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-3 text-slate-300 hover:text-white hover:bg-secondary/50 transition-colors rounded-md"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left px-4 py-3 text-slate-300 hover:text-white hover:bg-secondary/50 transition-colors rounded-md"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left px-4 py-3 text-slate-300 hover:text-white hover:bg-secondary/50 transition-colors rounded-md"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left px-4 py-3 text-slate-300 hover:text-white hover:bg-secondary/50 transition-colors rounded-md"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="block w-full text-left px-4 py-3 text-slate-300 hover:text-white hover:bg-secondary/50 transition-colors rounded-md"
            >
              Education & Certifications
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-3 text-slate-300 hover:text-white hover:bg-secondary/50 transition-colors rounded-md"
            >
              Contact
            </button>

            <div className="px-4 pt-4 flex flex-col gap-3 border-t border-slate-700 mt-4">
              <a
                href="mailto:azaanulhaq439@gmail.com"
                className="btn-primary text-sm py-2.5 text-center w-full"
              >
                Email
              </a>
              <a
                href="tel:+923209359822"
                className="btn-secondary text-sm py-2.5 text-center w-full"
              >
                Call
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
