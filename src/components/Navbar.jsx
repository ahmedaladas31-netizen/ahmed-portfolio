import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { profile } from '../data/profile'

const links = [
  { to: '/', label: 'الرئيسية' },
  { to: '/projects', label: 'الأعمال' },
  { to: '/articles', label: 'مقالات' },
  { to: '/about', label: 'عني' },
  { to: '/contact', label: 'تواصل' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    [
      'border-2 px-3 py-1.5 font-display font-bold transition-all',
      isActive
        ? 'border-ink bg-ink text-cream'
        : 'border-transparent hover:border-ink hover:bg-yellow',
    ].join(' ')

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-cream/95 backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8"
        aria-label="التنقّل الرئيسي"
      >
        {/* الشعار */}
        <Link to="/" className="flex items-center gap-2" aria-label={`${profile.name} — الرئيسية`}>
          <span className="flex h-10 w-10 items-center justify-center border-[3px] border-ink bg-yellow font-display text-xl font-extrabold shadow-brutal-sm">
            ع
          </span>
          <span className="hidden font-display text-lg font-extrabold sm:block">{profile.name}</span>
        </Link>

        {/* روابط سطح المكتب */}
        <ul className="hidden items-center gap-2 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={linkClass} end={l.to === '/'}>
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="border-[3px] border-ink bg-pink px-4 py-1.5 font-display font-bold shadow-brutal-sm transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal"
            >
              راسلني
            </a>
          </li>
        </ul>

        {/* زر القائمة للجوال */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center border-[3px] border-ink bg-cyan shadow-brutal-sm md:hidden"
          aria-label="فتح القائمة"
          aria-expanded={open}
        >
          <span className="font-display text-xl font-extrabold">{open ? '✕' : '☰'}</span>
        </button>
      </nav>

      {/* قائمة الجوال */}
      {open && (
        <ul className="flex flex-col gap-2 border-t-[3px] border-ink bg-cream px-5 py-4 md:hidden">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={linkClass}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-block border-[3px] border-ink bg-pink px-4 py-1.5 font-display font-bold shadow-brutal-sm"
            >
              راسلني
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
