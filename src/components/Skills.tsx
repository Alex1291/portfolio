import { useEffect, useRef, useState } from 'react'
import SectionLabel from './SectionLabel'

interface Skill {
  name: string
  level: number
}

interface Group {
  category: string
  color: string
  skills: Skill[]
}

const groups: Group[] = [
  {
    category: 'Frontend',
    color: 'var(--accent)',
    skills: [
      { name: 'React', level: 92 },
      { name: 'JavaScript', level: 80 },
      { name: 'HTML / CSS', level: 88 },
      { name: 'Vite', level: 78 },
    ],
  },
  {
    category: 'Backend',
    color: 'var(--accent2)',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Spring Boot', level: 88 },
      { name: 'REST APIs', level: 92 },
      { name: 'JUnit', level: 75 },
    ],
  },
  {
    category: 'Data & Infra',
    color: 'var(--accent3)',
    skills: [
      { name: 'PostgreSQL', level: 87 },
      { name: 'Docker', level: 76 },
      { name: 'Git / GitHub', level: 90 },
      { name: 'AWS', level: 60 },
      { name: 'Redis', level: 55 },
    ],
  },
]

function SkillBar({ name, level, color, animate }: Skill & { color: string; animate: boolean }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 7,
        }}
      >
        <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--text)' }}>
          {name}
        </span>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--text3)' }}>
          {level}%
        </span>
      </div>
      <div
        style={{
          height: 2,
          background: 'var(--border)',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: animate ? `${level}%` : '0%',
            background: color,
            borderRadius: 2,
            transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef<HTMLElement>(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id="skills"
      style={{
        padding: '88px 48px',
        borderBottom: '0.5px solid var(--border)',
      }}
    >
      <SectionLabel index="03" label="SKILLS" />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 1,
          background: 'var(--border)',
          border: '0.5px solid var(--border)',
          borderRadius: 'var(--rl)',
          overflow: 'auto',
        }}
      >
        {groups.map(group => (
          <div key={group.category} style={{ background: 'var(--bg2)', padding: '30px 28px' }}>
            <div
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 10,
                color: group.color,
                letterSpacing: '0.12em',
                marginBottom: 24,
                textTransform: 'uppercase',
              }}
            >
              {group.category}
            </div>
            {group.skills.map(skill => (
              <SkillBar
                key={skill.name}
                {...skill}
                color={group.color}
                animate={animate}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
