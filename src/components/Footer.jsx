import React from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-slate-400 text-sm">
              © {currentYear} Azaan Ul Haq. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs mt-1">
              Built with React & Tailwind CSS
            </p>
          </div>

          {/* Right - Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-accent transition-colors"
          >
            <span className="text-sm">Back to Top</span>
            <FaArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
