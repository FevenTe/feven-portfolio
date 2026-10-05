import { projects } from '../data'

export default function Projects() {
  return (
    <section className="section container" id="projects">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((p, i) => (
          <article className="project" key={p.name}>
            <div className="project-head">
              <h3>{p.name}</h3>
               {p.status && <span className="badge">{p.status}</span>}
            </div>
            <p className="type">{p.type}</p>
            <p>{p.summary}</p>

            <ul className="chips">
              {p.tech.map((t) => <li key={t}>{t}</li>)}
            </ul>

            {(p.github || p.demo) && (
              <div className="links">
                {p.github && <a href={p.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Live demo ↗</a>}
              </div>
            )}

            <details>
              <summary>Details</summary>
              <h4>Problem it solves</h4>
              <p>{p.problem}</p>
              <h4>My role</h4>
              <p>{p.role}</p>
              <h4>Key features</h4>
              <ul className="features">
                {p.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </details>
          </article>
        ))}
      </div>
    </section>
  )
}