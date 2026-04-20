import React from 'react'
import { FaCogs, FaPeopleCarry, FaShieldAlt } from 'react-icons/fa'

const focusAreas = [
  {
    icon: FaCogs,
    title: 'Automation Mindset',
    description:
      'I enjoy finding repetitive operational work, understanding the real bottleneck, and turning it into a cleaner, faster workflow with measurable impact.'
  },
  {
    icon: FaPeopleCarry,
    title: 'Cross-Functional Delivery',
    description:
      'My work sits at the intersection of product, engineering, operations, and business teams, helping translate requirements into solutions teams can actually ship.'
  },
  {
    icon: FaShieldAlt,
    title: 'Enterprise Context',
    description:
      'Working in regulated environments has strengthened my focus on reliability, traceability, stakeholder alignment, and rollout readiness.'
  }
]

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-accent mb-4">About Me</p>
            <h2 className="section-title max-w-3xl">
              Building practical digital solutions that make teams faster, clearer, and more effective.
            </h2>

            <div className="space-y-5 text-slate-300 leading-relaxed max-w-3xl">
              <p>
                I am a Computer Science graduate and product-minded technology professional currently working as a
                Science and Engineering Associate at UBL. My background combines software development, systems thinking,
                and business collaboration, which helps me move comfortably between technical implementation and
                delivery coordination.
              </p>
              <p>
                Over the last few years, I have worked across automation initiatives, web development, operational
                digitization, and user-focused product support. I am especially motivated by projects where technology
                removes friction, improves visibility, and helps organizations scale with less manual effort.
              </p>
              <p>
                I bring a hands-on approach to problem solving, whether that means refining requirements, supporting
                UAT, improving process flow, or building the tools that make a workflow easier to manage. My goal is
                always to create solutions that are not only functional, but dependable and useful in real-world teams.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {focusAreas.map((area) => {
              const Icon = area.icon

              return (
                <article key={area.title} className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-accent text-lg" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{area.title}</h3>
                      <p className="text-slate-300 leading-relaxed text-sm">{area.description}</p>
                    </div>
                  </div>
                </article>
              )
            })}

            <div className="rounded-xl border border-accent/25 bg-accent/5 p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-accent mb-3">What I Value</p>
              <p className="text-slate-300 leading-relaxed">
                Clear communication, ownership, thoughtful execution, and technology that solves real business
                problems rather than adding noise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
