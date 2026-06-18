import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Section from '../components/Section'
import Button from '../components/Button'
import Badge from '../components/Badge'
import Marquee from '../components/Marquee'
import Reveal from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import { profile } from '../data/profile'
import { projects } from '../data/projects'

export default function Home() {
  const featured = projects.filter((p) => p.featured)

  // بيانات منظّمة لصفحة الملف الشخصي (ProfilePage)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: `${profile.name} — بورتفوليو`,
    inLanguage: 'ar',
    about: { '@type': 'Person', name: profile.name, jobTitle: profile.role },
  }

  return (
    <>
      <Seo path="/" jsonLd={jsonLd} />

      {/* ===================== Hero ===================== */}
      <Section className="!py-14 sm:!py-20">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Badge className="animate-pop bg-yellow">{profile.availability}</Badge>

            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] animate-rise sm:text-6xl md:text-7xl">
              <span className="underline-brutal">{profile.name}</span>
              <span className="mt-3 block text-ink/90">{profile.role}</span>
            </h1>

            <p
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80 animate-rise"
              style={{ animationDelay: '120ms' }}
            >
              {profile.tagline}
            </p>

            <div
              className="mt-8 flex flex-wrap gap-4 animate-rise"
              style={{ animationDelay: '220ms' }}
            >
              <Button to="/projects" size="lg" variant="dark">
                شاهد أعمالي ←
              </Button>
              <Button to="/contact" size="lg" variant="pink">
                تواصل معي
              </Button>
            </div>
          </div>

          {/* بطاقة بصرية بروتالية */}
          <div className="md:col-span-5">
            <div className="relative mx-auto max-w-sm animate-pop" style={{ animationDelay: '160ms' }}>
              <div className="card-brutal rotate-2 bg-cyan p-6">
                <div className="flex items-center justify-between font-mono text-xs font-bold">
                  <span>PORTFOLIO.JSX</span>
                  <span>2025</span>
                </div>
                <div className="mt-4 flex h-44 items-center justify-center border-[3px] border-ink bg-cream">
                  <span className="font-display text-6xl font-extrabold">{'</>'}</span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <span className="h-8 border-[3px] border-ink bg-yellow" />
                  <span className="h-8 border-[3px] border-ink bg-pink" />
                  <span className="h-8 border-[3px] border-ink bg-blue" />
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 -z-10 h-24 w-24 border-[3px] border-ink bg-pink" />
            </div>
          </div>
        </div>
      </Section>

      {/* ===================== شريط المهارات ===================== */}
      <Marquee items={profile.skills} />

      {/* ===================== أعمال مختارة ===================== */}
      <Section>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="font-mono text-sm uppercase tracking-widest text-ink/60">
                /// أعمال مختارة
              </span>
              <h2 className="section-title mt-2">مشاريع صنعتها بنفسي</h2>
            </div>
            <Link
              to="/projects"
              className="border-b-[3px] border-ink font-display text-lg font-bold hover:bg-yellow"
            >
              كل الأعمال ←
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ===================== ماذا أقدّم ===================== */}
      <div className="border-y-[3px] border-ink bg-yellow">
        <Section className="!py-16">
          <Reveal>
            <h2 className="section-title">ماذا أقدّم</h2>
          </Reveal>
          <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {profile.services.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="card-brutal h-full bg-cream p-6">
                  <span className="flex h-12 w-12 items-center justify-center border-[3px] border-ink bg-pink font-display text-2xl font-extrabold">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-extrabold">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink/80">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      </div>

      {/* ===================== دعوة للتواصل ===================== */}
      <Section>
        <Reveal>
          <div className="card-brutal flex flex-col items-center gap-6 bg-ink p-10 text-center text-cream sm:p-14">
            <h2 className="section-title text-cream">عندك فكرة مشروع؟ لنبنِها سويًا.</h2>
            <p className="max-w-xl text-lg text-cream/80">
              متاح حاليًا لمشاريع جديدة. راسلني ولنحوّل فكرتك إلى منتج رقمي حقيقي.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href={profile.whatsapp} size="lg" variant="primary">
                راسلني على واتساب
              </Button>
              <Button to="/about" size="lg" variant="cream">
                تعرّف عليّ أكثر
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
