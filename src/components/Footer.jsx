import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import { projects } from '../data/projects'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-8 border-t-[3px] border-ink bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        {/* العمود الأول */}
        <div>
          <h2 className="font-display text-2xl font-extrabold">{profile.name}</h2>
          <p className="mt-3 max-w-xs leading-relaxed text-cream/80">{profile.tagline}</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-4 inline-block border-b-[3px] border-yellow font-mono text-sm hover:bg-yellow hover:text-ink"
          >
            {profile.email}
          </a>
        </div>

        {/* روابط داخلية */}
        <nav aria-label="روابط الموقع">
          <h3 className="font-mono text-sm uppercase tracking-widest text-yellow">الموقع</h3>
          <ul className="mt-4 space-y-2">
            <li><Link to="/" className="hover:text-yellow">الرئيسية</Link></li>
            <li><Link to="/projects" className="hover:text-yellow">الأعمال</Link></li>
            <li><Link to="/articles" className="hover:text-yellow">مقالات</Link></li>
            <li><Link to="/about" className="hover:text-yellow">عني</Link></li>
            <li><Link to="/contact" className="hover:text-yellow">تواصل</Link></li>
          </ul>
        </nav>

        {/* روابط داخلية للمشاريع */}
        <nav aria-label="المشاريع">
          <h3 className="font-mono text-sm uppercase tracking-widest text-yellow">المشاريع</h3>
          <ul className="mt-4 space-y-2">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link to={`/projects/${p.slug}`} className="hover:text-yellow">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-cream/20">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-5 sm:flex-row sm:px-8">
          <p className="font-mono text-xs text-cream/70">
            © {year} {profile.name}. صُمّم ووُطّر بنمط Neo-brutalism.
          </p>
          <ul className="flex gap-3">
            {profile.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-cream/40 px-3 py-1 font-mono text-xs hover:border-yellow hover:bg-yellow hover:text-ink"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
