import { useEffect, useState } from 'react'

const techStack = ['React', 'Java Spring Boot', 'PostgreSQL']

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const [techIdx, setTechIdx] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60)
    const iv = setInterval(() => setTechIdx(i => (i + 1) % techStack.length), 2400)
    return () => { clearTimeout(t); clearInterval(iv) }
  }, [])

  const fade = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
  })

  return (
    <section
      id="hero"
      style={{
        padding: '110px 48px 96px',
        borderBottom: '0.5px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid decoration */}
      <svg
        style={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 400,
          height: 400,
          opacity: 0.03,
          pointerEvents: 'none',
        }}
        viewBox="0 0 400 400"
      >
        <defs>
          <pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#g)" />
      </svg>

      {/* Corner accent */}
      <div
        style={{
          position: 'absolute',
          top: 48,
          right: 48,
          width: 120,
          height: 120,
          border: '0.5px solid var(--border2)',
          borderRadius: '50%',
          opacity: 0.4,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 36,
          right: 36,
          width: 144,
          height: 144,
          border: '0.5px solid var(--border)',
          borderRadius: '50%',
          opacity: 0.3,
          pointerEvents: 'none',
        }}
      />

      {/* Tag */}
      <div style={{ ...fade(0), marginBottom: 30 }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            fontFamily: 'var(--mono)',
            fontSize: 11,
            color: 'var(--accent)',
            letterSpacing: '0.1em',
          }}
        >
          <span style={{ width: 28, height: 1, background: 'var(--accent)', display: 'block' }} />
          FULL-STACK ENGINEER
        </span>
      </div>

      {/* Headline */}
      <h1
        style={{
          ...fade(90),
          fontSize: 'clamp(48px, 6.5vw, 82px)',
          fontWeight: 800,
          lineHeight: 1.03,
          letterSpacing: '-2.5px',
          marginBottom: 28,
          maxWidth: 740,
        }}
      >
        Building<br />
        scalable{' '}
        <em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>digital</em>
        <br />systems
      </h1>

      {/* Sub */}
      <p
        style={{
          ...fade(180),
          fontFamily: 'var(--mono)',
          fontSize: 14,
          color: 'var(--text2)',
          maxWidth: 460,
          lineHeight: 1.9,
          marginBottom: 18,
        }}
      >
        I design and ship end-to-end web applications — from pixel-perfect
        React UIs to robust APIs backed by PostgreSQL.
      </p>

      {/* Tech ticker */}
      <div
        style={{
          ...fade(230),
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          fontFamily: 'var(--mono)',
          fontSize: 13,
          marginBottom: 46,
        }}
      >
        <span style={{ color: 'var(--text3)' }}>currently building with</span>
        <span
          key={techIdx}
          style={{
            color: 'var(--accent)',
            animation: 'fadeUp 0.4s ease',
          }}
        >
          {techStack[techIdx]}
        </span>
      </div>

      {/* Actions */}
      <div style={{ ...fade(320), display: 'flex', gap: 14 }}>
        <button
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.82')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          style={{
            padding: '13px 30px',
            background: 'var(--accent)',
            color: '#080808',
            border: 'none',
            borderRadius: 'var(--r)',
            fontFamily: 'var(--mono)',
            fontSize: 12,
            fontWeight: 500,
            cursor: 'pointer',
            letterSpacing: '0.04em',
            transition: 'opacity 0.2s',
          }}
        >
          view my work
        </button>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          onMouseEnter={e => {
            e.currentTarget.style.color = 'var(--text)'
            e.currentTarget.style.borderColor = 'var(--border3)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = 'var(--text2)'
            e.currentTarget.style.borderColor = 'var(--border2)'
          }}
          style={{
            padding: '13px 30px',
            background: 'transparent',
            color: 'var(--text2)',
            border: '0.5px solid var(--border2)',
            borderRadius: 'var(--r)',
            fontFamily: 'var(--mono)',
            fontSize: 12,
            cursor: 'pointer',
            letterSpacing: '0.04em',
            transition: 'color 0.2s, border-color 0.2s',
          }}
        >
          get in touch
        </button>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
