import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '18px 48px',
        background: scrolled ? 'rgba(8,8,8,0.94)' : 'transparent',
        borderBottom: `0.5px solid ${scrolled ? 'var(--border2)' : 'var(--border)'}`,
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        transition: 'background 0.3s, border-color 0.3s',
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        style={{
          fontFamily: 'var(--sans)',
          fontSize: 20,
          fontWeight: 800,
          letterSpacing: '-0.5px',
          color: 'var(--text)',
        }}
      >
        Alex<span style={{ color: 'var(--accent)' }}>.</span>
      </a>

      {/* Desktop links */}
      <ul
        style={{
          display: 'flex',
          gap: 36,
          listStyle: 'none',
        }}
      >
        {links.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              onMouseEnter={() => setHovered(label)}
              onMouseLeave={() => setHovered(null)}
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 12,
                letterSpacing: '0.04em',
                color: hovered === label ? 'var(--text)' : 'var(--text2)',
                transition: 'color 0.2s',
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        style={{
          fontFamily: 'var(--mono)',
          fontSize: 12,
          padding: '9px 20px',
          background: 'var(--accent)',
          color: '#080808',
          border: 'none',
          borderRadius: 'var(--r)',
          fontWeight: 500,
          cursor: 'pointer',
          letterSpacing: '0.04em',
          transition: 'opacity 0.2s',
        }}
      >
        Hire Me →
      </button>
    </nav>
  )
}
