import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Badge from '../components/Badge'
import { profile } from '../data/profile'
import { articles } from '../data/articles'

export default function Articles() {
  // بيانات منظّمة: مدوّنة (Blog) تضمّ قائمة المقالات
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `مقالات ${profile.name}`,
    inLanguage: 'ar',
    blogPost: articles.map((a) => ({
      '@type': 'BlogPosting',
      headline: a.title,
      description: a.description,
      url: `${profile.siteUrl}/articles/${a.slug}`,
      datePublished: a.date,
      author: { '@type': 'Person', name: profile.name },
    })),
  }

  return (
    <>
      <Seo
        title="مقالات"
        description="مقالات عربية عن الـ Technical SEO، الأتمتة المدعومة بالذكاء الاصطناعي، وقصص بناء مشاريع حقيقية — بقلم أحمد العدس."
        path="/articles"
        jsonLd={jsonLd}
      />

      <Section>
        <Reveal>
          <span className="font-mono text-sm uppercase tracking-widest text-ink/60">
            /// المدوّنة ({articles.length})
          </span>
          <h1 className="section-title mt-2">مقالات</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/80">
            بكتب عن اللي بتعلّمه وبنفّذه فعلياً: تحسين محركات البحث التقني، الأتمتة المدعومة
            بالذكاء الاصطناعي، وقصص بناء مشاريع حقيقية بحلوها ومرّها.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-7 sm:grid-cols-2">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={i * 90}>
              <article className="card-brutal group flex h-full flex-col overflow-hidden transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg">
                <div
                  className="flex items-center justify-between border-b-[3px] border-ink p-5"
                  style={{ backgroundColor: a.accent, color: a.text }}
                >
                  <span className="font-mono text-xs font-bold uppercase tracking-widest">
                    {a.tags[0]}
                  </span>
                  <span className="font-mono text-xs font-semibold">{a.dateLabel}</span>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h2 className="font-display text-2xl font-extrabold leading-tight">
                    <Link to={`/articles/${a.slug}`} className="hover:underline-brutal">
                      {a.title}
                    </Link>
                  </h2>

                  <p className="leading-relaxed text-ink/80">{a.description}</p>

                  <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
                    {a.tags.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>

                  <Link
                    to={`/articles/${a.slug}`}
                    className="mt-2 inline-flex w-fit items-center gap-1 border-b-[3px] border-ink font-display font-bold transition-colors group-hover:bg-yellow"
                  >
                    اقرأ المقال
                    <span aria-hidden="true">←</span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}
