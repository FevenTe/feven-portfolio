import { profile } from '../data'

export default function Hero() {
  const cvUrl = `${import.meta.env.BASE_URL}${profile.cv}`
  return (
    <section className="hero container" id="top">
      <div className="hero-text">
        <p className="hi">Hi, I'm</p>
        <h1>{profile.name}</h1>
        <p className="role">
        I'm a junior developer focused on web development, with an interest in data analysis and machine learning.

        </p>
        <p className="lead">
          Computer Science graduate with project experience in React, Angular, Python and SQL.
        </p>
        <div className="actions">
          <a className="btn btn-primary" href="#projects">View projects</a>
          <a className="btn" href="/Feven_Temesgen_CV.pdf"download>Download CV</a>
        </div>
        <ul className="social">
          <li><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a></li>
          <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></li>
          <li><a href={`mailto:${profile.email}`}>Email ↗</a></li>
        </ul>
      </div>

      <div className="code" aria-hidden="true">
        <div className="code-bar"><i /><i /><i /></div>
        <pre>
<span className="c">// feven.js</span>{'\n'}
<span className="k">const</span> feven = {'{'}{'\n'}
{'  '}degree: <span className="s">"BSc Computer Science"</span>,{'\n'}
{'  '}graduated: <span className="s">"Feb 2026"</span>,{'\n'}
{'  '}training: <span className="s">"Data &amp; AI Engineering"</span>,{'\n'}
{'  '}builds: [<span className="s">"React"</span>, <span className="s">"Angular"</span>, <span className="s">"Next.js"</span>],{'\n'}
{'  '}dataWith: [<span className="s">"Python"</span>, <span className="s">"SQL"</span>],{'\n'}
{'  '}lookingFor: <span className="s">"Software, web &amp; data roles"</span>,{'\n'}
{'}'}
        </pre>
      </div>
    </section>
  )
}