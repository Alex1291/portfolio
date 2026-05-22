interface Props {
  index: string
  label: string
}

export default function SectionLabel({ index, label }: Props) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        fontFamily: 'var(--mono)',
        fontSize: 11,
        letterSpacing: '0.1em',
        marginBottom: 48,
      }}
    >
      <span style={{ color: 'var(--text3)' }}>{index} —</span>
      <span style={{ color: 'var(--accent)' }}>{label}</span>
      <span
        style={{
          display: 'block',
          width: 44,
          height: 0.5,
          background: 'var(--accent)',
          opacity: 0.4,
        }}
      />
    </div>
  )
}
