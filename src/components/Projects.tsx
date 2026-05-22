import { useState } from 'react'
import SectionLabel from './SectionLabel'

interface Project {
  num: string
  title: string
  desc: string
  tags: string[]
  url: string
}

const projects: Project[] = [
  {
    num: '001',
    title: 'eCommerce Web Application',
    desc: 'RESTful e-commerce platform with product catalog, shopping cart, and secure checkout functionality. Full functional admin panel for product, user and order management. Integrated Stripe API for payment processing.',
    tags: ['React', 'Vite', 'Spring Boot', 'Supabase', 'Chart.js', 'Stripe API'],
    url: '#',
  },
  {
    num: '002',
    title: 'Real-time Bus Tracking System',
    desc: 'RESTful real-time bus tracking application with live location updates, route planning, and passenger information display.',
    tags: ['React', 'Spring Boot', 'Google Map Api', 'Firebase Realtime Database', 'Firebase Cloud Functions'],
    url: '#',
  },
  {
    num: '003',
    title: 'Food Ordering System - Coming Soon',
    desc: 'Web application for ordering food online with a user-friendly interface and seamless integration with the restaurant\'s backend systems.',
    tags: ['React', 'Spring Boot', 'PostgreSQL', 'Chart.js'],
    url: '#',
  },
  {
    num: '004',
    title: 'JobHunt',
    desc: 'Job search application allowing users to browse listings, apply to positions, and manage their applications.',
    tags: ['Kotlin', 'Firebase'],
    url: '#',
  },
]

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--bg3)' : 'var(--bg2)',
        padding: 32,
        transition: 'background 0.2s',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--mono)',
          fontSize: 11,
          color: 'var(--text3)',
          letterSpacing: '0.08em',
          marginBottom: 18,
        }}
      >
        {project.num}
      </div>

      <div
        style={{
          fontSize: 19,
          fontWeight: 700,
          letterSpacing: '-0.5px',
          marginBottom: 10,
          lineHeight: 1.2,
        }}
      >
        {project.title}
      </div>

      <p
        style={{
          fontFamily: 'var(--mono)',
          fontSize: 12,
          color: 'var(--text2)',
          lineHeight: 1.85,
          marginBottom: 22,
        }}
      >
        {project.desc}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
        {project.tags.map(tag => (
          <span
            key={tag}
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 10,
              padding: '4px 10px',
              border: '0.5px solid var(--border2)',
              borderRadius: 3,
              color: 'var(--text2)',
              letterSpacing: '0.04em',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: '88px 48px',
        borderBottom: '0.5px solid var(--border)',
      }}
    >
      <SectionLabel index="02" label="PROJECTS" />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 1,
          background: 'var(--border)',
          border: '0.5px solid var(--border)',
          borderRadius: 'var(--rl)',
          overflow: 'hidden',
        }}
      >
        {projects.map(p => (
          <ProjectCard key={p.num} project={p} />
        ))}
      </div>
    </section>
  )
}
