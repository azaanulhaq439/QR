import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-20 section-padding">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Azaan Ul Haq
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-accent font-medium">
                Science & Engineering Associate at UBL
              </p>
              <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed">
                Product-driven engineer passionate about automation, agile delivery, and digital transformation, turning
                complex operational needs into scalable solutions for enterprise teams.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 md:pt-6">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary flex items-center justify-center gap-2 text-base sm:text-lg py-3 md:py-3 w-full sm:w-auto px-6 md:px-8"
              >
                View Projects <FaArrowRight />
              </button>
              <a
                href="/Azaan_Ul_Haq_Resume.pdf"
                className="btn-secondary flex items-center justify-center gap-2 text-base sm:text-lg py-3 md:py-3 w-full sm:w-auto px-6 md:px-8"
              >
                Download Resume
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-8 md:pt-12 border-t border-slate-700">
              <div className="space-y-2">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">2+</p>
                <p className="text-xs sm:text-sm text-slate-400">Years Experience</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">4+</p>
                <p className="text-xs sm:text-sm text-slate-400">Projects Completed</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">100%</p>
                <p className="text-xs sm:text-sm text-slate-400">Dedicated</p>
              </div>
            </div>
          </div>

          <div
            className="home-img flex items-center justify-center mt-8 lg:mt-0"
            style={{
              visibility: 'visible',
              opacity: 1,
            }}
          >
            <img src="/profilepic.jpeg" alt="Azaan Ul Haq" />
          </div>
        </div>
      </div>
    </section>
  )
}
