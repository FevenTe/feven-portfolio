import { about, profile } from '../data'

export default function About() {
  const photoUrl = profile.photo ? `${import.meta.env.BASE_URL}${profile.photo}` : null

  return (
    <section className="section container" id="about">
      <h2>About me</h2>
      <div className="about-grid">
        <div>
          {about.map((p) => <p key={p}>{p}</p>)}
        </div>
        <aside className="card">
          {photoUrl && (
            <img
              className="avatar"
              src={photoUrl}
              alt={`Portrait of ${profile.name}`}
              width="120"
              height="120"
            />
          )}
          <h3>Open to</h3>
          <ul className="plain">
            {profile.openTo.map((r) => <li key={r}>{r}</li>)}
          </ul>
          <p className="muted small">{profile.location}</p>
        </aside>
      </div>
    </section>
  )
}