import { skills } from '../data'

export default function Skills() {
  return (
    <section className="section container" id="skills">
      <h2>Skills</h2>
      <p className="muted">
        Technologies I've used in my projects and training. I'm still building depth with them.
      </p>
      <div className="skills-box">
        {skills.map((s) => (
          <div className="skill-row" key={s.group}>
            <h3>{s.group}</h3>
            <ul className="chips">
              {s.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}