import { useParams, Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Section from '../components/Section'
import Badge from '../components/Badge'
import Reveal from '../components/Reveal'
import NotFound from './NotFound'
import { profile } from '../data/profile'
import { articles, getArticle } from '../data/articles'

export default function ArticleDetail() {
  const { slug } = useParams()
  const article = getArticle(slug)

  // مقال غير موجود → صفحة 404
  if (!article) return <NotFound />

  const index = articles.findIndex((a) => a.slug === slug)
  const next = articles[(index + 1) % articles.length]

  // بيانات منظّمة: Article + مسار التنقّل (BreadcrumbList)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        inLanguage: 'ar',
        datePublished: article.date,
        dateModified: article.date,
        author: { '@type': 'Person', name: profile.name, url: profile.siteUrl + '/' },
        publisher: { '@type': 'Person', name: profile.name },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${profile.siteUrl}/articles/${article.slug}`,
        },
        keywords: article.tags.join(', '),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: profile.siteUrl + '/' },
          { '@type': 'ListItem', position: 2, name: 'مقالات', item: profile.siteUrl + '/articles' },
          {
            '@type': 'ListItem',
            position: 3,
            name: article.title,
            item: `${profile.siteUrl}/articles/${article.slug}`,
          },
        ],
      },
    ],
  }

  return (
    <>
      <Seo
        title={article.title}
        description={article.description}
        path={`/articles/${article.slug}`}
        type="article"
        jsonLd={jsonLd}
      />

      {/* مسار التنقّل (روابط داخلية) */}
      <Section className="!py-6">
        <nav aria-label="مسار التنقّل" className="font-mono text-sm">
          <ol className="flex flex-wrap items-center gap-2 text-ink/70">
            <li><Link to="/" className="hover:text-ink hover:underline">الرئيسية</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link to="/articles" className="hover:text-ink hover:underline">مقالات</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-bold text-ink">{article.title}</li>
          </ol>
        </nav>
      </Section>

      {/* رأس المقال */}
      <Section className="!pt-2">
        <Reveal>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((t) => (
              <Badge key={t} style={{ backgroundColor: article.accent, color: article.text }}>
                {t}
              </Badge>
            ))}
          </div>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            {article.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 font-mono text-sm text-ink/60">
            <span>بقلم {profile.name}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={article.date}>{article.dateLabel}</time>
            <span aria-hidden="true">·</span>
            <span>{article.readingTime}</span>
          </div>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/80">{article.description}</p>
        </Reveal>
      </Section>

      {/* جسم المقال */}
      <Section className="!pt-0">
        <div className="max-w-2xl space-y-10">
          {article.body.map((block) => (
            <Reveal key={block.heading}>
              <h2 className="font-display text-2xl font-extrabold">
                <span className="underline-brutal">{block.heading}</span>
              </h2>
              {block.paragraphs?.map((p, i) => (
                <p key={i} className="mt-4 text-lg leading-loose text-ink/85">{p}</p>
              ))}
              {block.list && (
                <ul className="mt-4 space-y-3">
                  {block.list.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-ink/85">
                      <span
                        className="mt-1 inline-block h-3 w-3 shrink-0 border-2 border-ink"
                        style={{ backgroundColor: article.accent }}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </Section>

      {/* المصادر */}
      {article.sources?.length > 0 && (
        <Section className="!pt-0">
          <div className="max-w-2xl">
            <Reveal>
              <h2 className="font-display text-xl font-extrabold">
                <span className="underline-brutal">المصادر</span>
              </h2>
              <ul className="mt-4 space-y-3">
                {article.sources.map((src) => (
                  <li key={src.url} className="flex gap-3 items-start leading-relaxed text-ink/85">
                    <span
                      className="mt-1 inline-block h-3 w-3 shrink-0 border-2 border-ink"
                      style={{ backgroundColor: article.accent }}
                      aria-hidden="true"
                    />
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-ink break-all"
                    >
                      {src.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Section>
      )}

      {/* تنقّل: المقال التالي + كل المقالات */}
      <Section className="flex flex-col items-center justify-between gap-5 sm:flex-row">
        <Link to="/articles" className="border-b-[3px] border-ink font-display text-lg font-bold hover:bg-yellow">
          ← كل المقالات
        </Link>
        {next && next.slug !== article.slug && (
          <Link
            to={`/articles/${next.slug}`}
            className="border-b-[3px] border-ink font-display text-lg font-bold hover:bg-yellow"
          >
            المقال التالي: {next.title} ←
          </Link>
        )}
      </Section>
    </>
  )
}
