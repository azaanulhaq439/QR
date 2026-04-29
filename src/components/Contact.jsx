import React, { useState } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Get in Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Open to opportunities and collaborations. Whether you have a project in mind or just want to chat about
              tech, automation, and product, feel free to reach out.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-accent text-lg" />
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Email</p>
                  <a href="mailto:azaanulhaq439@gmail.com" className="text-accent hover:text-accent-hover transition-colors break-all">
                    azaanulhaq439@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-accent text-lg" />
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Phone</p>
                  <a href="tel:+923209359822" className="text-accent hover:text-accent-hover transition-colors">
                    +92 (320) 9359822
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-accent text-lg" />
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Location</p>
                  <p className="text-slate-300">Islamabad, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-700">
              <p className="text-sm text-slate-400 mb-4 uppercase tracking-wide">Connect on</p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/azaan-ul-haq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors"
                  title="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://github.com/azaanulhaq439"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors"
                  title="GitHub"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="mailto:azaanulhaq439@gmail.com"
                  className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors"
                  title="Email"
                >
                  <FaEnvelope size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="input-field resize-none"
                  placeholder="Your message..."
                />
              </div>

              {submitted && (
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <p className="text-green-400 font-medium">Message received! I&apos;ll get back soon.</p>
                </div>
              )}

              <button
                type="submit"
                className="w-full btn-primary text-lg py-3 font-semibold"
              >
                Send Message
              </button>

              <p className="text-xs text-slate-500 text-center">
                Typically reply within 24 hours. Open to opportunities.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
