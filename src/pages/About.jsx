import Seo from '../components/Seo'
import Section from '../components/Section'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { profile } from '../data/profile'

export default function About() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    inLanguage: 'ar',
    mainEntity: {
      '@type': 'Person',
      name: profile.name,
      jobTitle: profile.role,
      email: `mailto:${profile.email}`,
      knowsAbout: profile.skills,
    },
  }

  return (
    <>
      <Seo
        title="عني"
        description={`تعرّف على ${profile.name} — ${profile.role} من جنين، فلسطين. خبرة في React وNext.js والأتمتة (n8n وبوتات واتساب) والذكاء الاصطناعي وتحسين محركات البحث.`}
        path="/about"
        jsonLd={jsonLd}
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <span className="font-mono text-sm uppercase tracking-widest text-ink/60">/// عني</span>
              <h1 className="section-title mt-2">
                مرحبًا، أنا <span className="underline-brutal">{profile.name}</span>
              </h1>
              <p className="mt-6 text-lg leading-loose text-ink/85">{profile.bio}</p>
              <p className="mt-4 text-lg leading-loose text-ink/85">{profile.story}</p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button to="/projects" variant="dark" size="lg">شاهد أعمالي ←</Button>
                <Button to="/contact" variant="pink" size="lg">تواصل معي</Button>
              </div>
            </Reveal>
          </div>

          {/* بطاقة معلومات */}
          <aside className="md:col-span-5">
            <Reveal delay={120}>
              <div className="card-brutal bg-cyan p-6">
                <h2 className="font-display text-2xl font-extrabold">باختصار</h2>
                <ul className="mt-4 space-y-3 font-medium">
                  <li className="flex justify-between border-b-2 border-ink/20 pb-2">
                    <span className="text-ink/60">المسمّى</span>
                    <span className="font-bold">{profile.role}</span>
                  </li>
                  <li className="flex justify-between border-b-2 border-ink/20 pb-2">
                    <span className="text-ink/60">الموقع</span>
                    <span className="font-bold">{profile.location}</span>
                  </li>
                  <li className="flex justify-between border-b-2 border-ink/20 pb-2">
                    <span className="text-ink/60">الحالة</span>
                    <span className="font-bold">{profile.availability}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-ink/60">البريد</span>
                    <a href={`mailto:${profile.email}`} className="font-bold underline">
                      راسلني
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>

        {/* المهارات والأدوات — مصنّفة */}
        <Reveal className="mt-16">
          <h2 className="section-title">المهارات والأدوات</h2>
          <div className="mt-7 grid gap-6 sm:grid-cols-2">
            {profile.skillGroups.map((group) => (
              <div key={group.title} className="card-brutal bg-cream p-6">
                <h3 className="font-display text-xl font-extrabold">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((s, i) => {
                    const bg = ['bg-yellow', 'bg-pink', 'bg-cyan', 'bg-lime', 'bg-violet'][i % 5]
                    return (
                      <span
                        key={s}
                        className={`border-[3px] border-ink ${bg} px-3 py-1.5 font-display text-sm font-bold shadow-brutal-sm`}
                      >
                        {s}
                      </span>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>
    </>
  )
}
