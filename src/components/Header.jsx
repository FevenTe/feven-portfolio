import { useState } from 'react'
import { profile } from '../data'

const links = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
]

export default function Header() {
  const [theme, setTheme] = useState(document.documentElement.dataset.theme || 'dark')

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try { localStorage.setItem('theme', next) } catch {}
    setTheme(next)
  }

  return (
    <header className="site-header">
      <div className="pill">
        <a className="brand" href="#top" aria-label={profile.name}>feven<span>.</span></a>
        <nav aria-label="Main">
          <ul className="nav">
            {links.map(([label, href]) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </nav>
        <button
          className="theme-btn"
          onClick={toggle}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          {theme === 'dark' ? '☀' : '☾'}
        </button>
      </div>
    </header>
  )
}