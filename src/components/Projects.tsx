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
    title: 'TaskFlow Pro',
    desc: 'Real-time project management tool with live collaboration, role-based access control, and Kanban boards with drag-and-drop.',
    tags: ['React', 'Spring Boot', 'PostgreSQL', 'WebSocket'],
    url: '#',
  },
  {
    num: '002',
    title: 'FinLedger API',
    desc: 'RESTful financial data API with JWT auth, rate limiting, and advanced SQL analytics for multi-tenant reporting.',
    tags: ['Spring Boot', 'PostgreSQL', 'Docker', 'JWT'],
    url: '#',
  },
  {
    num: '003',
    title: 'Storefront UI',
    desc: 'Headless e-commerce frontend with Zustand cart state, infinite scroll, product filters, and smooth page transitions.',
    tags: ['React', 'TypeScript', 'Zustand', 'Vite'],
    url: '#',
  },
  {
    num: '004',
    title: 'DataPulse Dashboard',
    desc: 'Analytics dashboard rendering real-time charts from a Spring Boot + PostgreSQL backend via WebSocket push updates.',
    tags: ['React', 'Spring Boot', 'PostgreSQL', 'Chart.js'],
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

      <a
        href={project.url}
        style={{
          fontFamily: 'var(--mono)',
          fontSize: 11,
          color: 'var(--accent)',
          letterSpacing: '0.04em',
          display: 'inline-flex',
          alignItems: 'center',
          gap: hovered ? 10 : 6,
          transition: 'gap 0.2s',
        }}
      >
        view project →
      </a>
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
