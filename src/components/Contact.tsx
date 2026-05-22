import { useState } from 'react'
import SectionLabel from './SectionLabel'

interface LinkRow {
  label: string
  value: string
  href: string
}

const rows: LinkRow[] = [
  { label: 'EMAIL', value: 'alex@example.com', href: 'mailto:alex@example.com' },
  { label: 'GITHUB', value: 'github.com/alex', href: 'https://github.com/alex' },
  { label: 'LINKEDIN', value: 'linkedin.com/in/alex', href: 'https://linkedin.com/in/alex' },
  { label: 'RESUME', value: 'Download PDF', href: '#' },
]

function LinkRow({ label, value, href }: LinkRow) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 24px',
        background: hovered ? 'var(--bg3)' : 'var(--bg2)',
        textDecoration: 'none',
        transition: 'background 0.2s',
        cursor: 'pointer',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--mono)',
          fontSize: 10,
          color: 'var(--text3)',
          letterSpacing: '0.1em',
          minWidth: 80,
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: 'var(--mono)',
          fontSize: 13,
          color: hovered ? 'var(--accent)' : 'var(--text)',
          transition: 'color 0.2s',
          flex: 1,
          textAlign: 'center',
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontSize: 14,
          color: hovered ? 'var(--accent)' : 'var(--text3)',
          transform: hovered ? 'translateX(4px)' : 'translateX(0)',
          transition: 'color 0.2s, transform 0.2s',
          display: 'inline-block',
        }}
      >
        →
      </span>
    </a>
  )
}

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: '88px 48px',
        borderBottom: '0.5px solid var(--border)',
      }}
    >
      <SectionLabel index="04" label="CONTACT" />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'start',
        }}
      >
        {/* Left */}
        <div>
          <h2
            style={{
              fontSize: 42,
              fontWeight: 800,
              letterSpacing: '-2px',
              lineHeight: 1.07,
              marginBottom: 20,
            }}
          >
            Let's build<br />
            something<br />
            <span style={{ color: 'var(--accent)' }}>great.</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 13,
              color: 'var(--text2)',
              lineHeight: 1.9,
              maxWidth: 320,
              marginBottom: 32,
            }}
          >
            Currently available for freelance projects and full-time roles.
            Have an interesting project or opportunity? Let's talk.
          </p>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: 'var(--mono)',
              fontSize: 12,
              color: 'var(--text2)',
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'var(--accent)',
                display: 'inline-block',
                boxShadow: '0 0 10px rgba(200,255,87,0.5)',
              }}
            />
            Available for work
          </div>
        </div>

        {/* Right */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            background: 'var(--border)',
            border: '0.5px solid var(--border)',
            borderRadius: 'var(--rl)',
            overflow: 'hidden',
          }}
        >
          {rows.map(row => (
            <LinkRow key={row.label} {...row} />
          ))}
        </div>
      </div>
    </section>
  )
}
