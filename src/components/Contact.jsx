import { profile } from '../data'

export default function Contact() {
  return (
    <section className="section container" id="contact">
      <h2>Contact</h2>
      <p className="lead">
        I'm open to junior software, web and data roles. If you'd like to talk about an opportunity, email me or message me on LinkedIn.
      </p>
      <div className="actions">
        <a className="btn btn-primary" href={`mailto:${profile.email}`}>{profile.email}</a>
        <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </section>
  )
}