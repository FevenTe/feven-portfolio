import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="muted small">
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
      </div>
    </footer>
  )
}