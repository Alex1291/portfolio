import SectionLabel from './SectionLabel'

const stats = [
  { num: '1+', label: 'years experience' },
  { num: '12+', label: 'projects shipped' },
  { num: '8+', label: 'happy clients' },
  { num: '100%', label: 'remote ready' },
]

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '88px 48px',
        borderBottom: '0.5px solid var(--border)',
      }}
    >
      <SectionLabel index="01" label="ABOUT" />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'start',
        }}
      >
        {/* Bio */}
        <div>
          <h2
            style={{
              fontSize: 34,
              fontWeight: 700,
              letterSpacing: '-1px',
              lineHeight: 1.18,
              marginBottom: 22,
            }}
          >
            Engineer by trade,<br />builder by nature.
          </h2>
          {[
            "Hi, I'm Alex — a full-stack developer with a passion for crafting clean, performant web applications that solve real problems.",
            'My stack centers around React on the frontend, Java Spring Boot for backend services, and PostgreSQL for data persistence.',
            'Currently open to new opportunities — remote or hybrid.',
          ].map((p, i) => (
            <p
              key={i}
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 13,
                color: i === 2 ? 'var(--accent)' : 'var(--text2)',
                lineHeight: 1.95,
                marginBottom: i < 2 ? 14 : 0,
              }}
            >
              {p}
            </p>
          ))}
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 1,
            background: 'var(--border)',
            border: '0.5px solid var(--border)',
            borderRadius: 'var(--rl)',
            overflow: 'hidden',
          }}
        >
          {stats.map(({ num, label }) => (
            <div key={label} style={{ background: 'var(--bg2)', padding: '32px 26px' }}>
              <div
                style={{
                  fontSize: 44,
                  fontWeight: 800,
                  letterSpacing: '-2.5px',
                  color: 'var(--accent)',
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {num}
              </div>
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  color: 'var(--text3)',
                  letterSpacing: '0.04em',
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
