import { useState } from 'react'
import Seo from '../components/Seo'
import Section from '../components/Section'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { profile } from '../data/profile'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  // يفتح بريد المستخدم مع الرسالة جاهزة (mailto) — لا حاجة لخادم خلفي.
  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`رسالة من ${form.name || 'زائر الموقع'}`)
    const body = encodeURIComponent(`${form.message}\n\nالاسم: ${form.name}\nالبريد: ${form.email}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const field =
    'w-full border-[3px] border-ink bg-cream px-4 py-3 font-body text-ink placeholder-ink/40 focus:bg-yellow/40'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    inLanguage: 'ar',
    mainEntity: {
      '@type': 'Person',
      name: profile.name,
      email: `mailto:${profile.email}`,
      telephone: '+970597666336',
    },
  }

  return (
    <>
      <Seo
        title="تواصل"
        description={`تواصل مع ${profile.name} لمناقشة مشروعك القادم. متاح لمشاريع جديدة.`}
        path="/contact"
        jsonLd={jsonLd}
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-12">
          {/* العمود الأيمن: دعوة + روابط */}
          <div className="md:col-span-5">
            <Reveal>
              <span className="font-mono text-sm uppercase tracking-widest text-ink/60">/// تواصل</span>
              <h1 className="section-title mt-2">لنبنِ شيئًا رائعًا</h1>
              <p className="mt-5 text-lg leading-relaxed text-ink/80">
                عندك مشروع، سؤال، أو فرصة عمل؟ املأ النموذج أو راسلني مباشرةً — أحب أن أسمع الأفكار الجديدة.
              </p>

              <a
                href={`mailto:${profile.email}`}
                className="mt-6 inline-block border-[3px] border-ink bg-yellow px-5 py-3 font-mono font-bold shadow-brutal-sm transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal"
              >
                {profile.email}
              </a>

              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex w-fit items-center gap-2 border-[3px] border-ink bg-[#25D366] px-5 py-3 font-mono font-bold shadow-brutal-sm transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal"
              >
                واتساب: {profile.phone}
              </a>

              <ul className="mt-6 flex flex-wrap gap-3">
                {profile.social.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-[3px] border-ink bg-cream px-4 py-2 font-display font-bold shadow-brutal-sm transition-all hover:bg-pink"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* العمود الأيسر: النموذج */}
          <div className="md:col-span-7">
            <Reveal delay={120}>
              <form onSubmit={handleSubmit} className="card-brutal space-y-5 bg-cream p-6 sm:p-8">
                <div>
                  <label htmlFor="name" className="mb-2 block font-display font-bold">الاسم</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={field}
                    placeholder="اسمك الكريم"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block font-display font-bold">البريد الإلكتروني</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={field}
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block font-display font-bold">الرسالة</label>
                  <textarea
                    id="message"
                    required
                    rows="5"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={field}
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>
                <Button onClick={handleSubmit} size="lg" variant="dark" className="w-full">
                  إرسال الرسالة ←
                </Button>
              </form>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  )
}
