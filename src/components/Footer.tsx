export default function Footer() {
  return (
    <footer
      style={{
        padding: '22px 48px',
        borderTop: '0.5px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--mono)',
          fontSize: 11,
          color: 'var(--text3)',
          letterSpacing: '0.04em',
        }}
      >
        © {new Date().getFullYear()} Alex — All rights reserved
      </span>
      <span
        style={{
          fontFamily: 'var(--mono)',
          fontSize: 11,
          color: 'var(--text3)',
        }}
      >
        Built with React + Vite · Spring Boot · PostgreSQL
      </span>
    </footer>
  )
}
