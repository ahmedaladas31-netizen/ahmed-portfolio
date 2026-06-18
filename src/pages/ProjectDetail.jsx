import { useParams, Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Section from '../components/Section'
import Button from '../components/Button'
import Badge from '../components/Badge'
import Reveal from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import ImageStrip from '../components/ImageStrip'
import NotFound from './NotFound'
import { profile } from '../data/profile'
import { projects, getProject, getRelated } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)

  // مشروع غير موجود → صفحة 404
  if (!project) return <NotFound />

  const related = getRelated(project)
  const index = projects.findIndex((p) => p.slug === slug)
  const next = projects[(index + 1) % projects.length]

  // بيانات منظّمة: CreativeWork + مسار التنقّل (BreadcrumbList)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork',
        name: project.title,
        alternateName: project.titleEn,
        about: project.category,
        inLanguage: 'ar',
        dateCreated: project.year,
        creator: { '@type': 'Person', name: profile.name },
        description: project.summary,
        keywords: project.tech.join(', '),
        creativeWorkStatus: project.status,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: profile.siteUrl + '/' },
          { '@type': 'ListItem', position: 2, name: 'الأعمال', item: profile.siteUrl + '/projects' },
          {
            '@type': 'ListItem',
            position: 3,
            name: project.title,
            item: `${profile.siteUrl}/projects/${project.slug}`,
          },
        ],
      },
    ],
  }

  return (
    <>
      <Seo
        title={project.title}
        description={project.summary}
        path={`/projects/${project.slug}`}
        type="article"
        jsonLd={jsonLd}
      />

      {/* مسار التنقّل (روابط داخلية) */}
      <Section className="!py-6">
        <nav aria-label="مسار التنقّل" className="font-mono text-sm">
          <ol className="flex flex-wrap items-center gap-2 text-ink/70">
            <li><Link to="/" className="hover:text-ink hover:underline">الرئيسية</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link to="/projects" className="hover:text-ink hover:underline">الأعمال</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-bold text-ink">{project.title}</li>
          </ol>
        </nav>
      </Section>

      {/* رأس المشروع */}
      <Section className="!pt-2">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <Badge style={{ backgroundColor: project.accent, color: project.text }}>
              {project.category}
            </Badge>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink/80">{project.summary}</p>

            <div className="mt-7 flex flex-wrap gap-4">
              {project.liveUrl && project.liveUrl !== '#' && (
                <Button href={project.liveUrl} variant="dark">
                  زيارة الموقع المباشر ↗
                </Button>
              )}
              {project.repoUrl && project.repoUrl !== '#' && (
                <Button href={project.repoUrl} variant="cream">
                  الكود المصدري
                </Button>
              )}
            </div>
          </div>

          {/* لوحة معلومات سريعة */}
          <aside className="md:col-span-5">
            <dl className="card-brutal grid grid-cols-2 gap-px overflow-hidden bg-ink text-sm">
              <div className="bg-cream p-4">
                <dt className="font-mono text-xs uppercase text-ink/60">السنة</dt>
                <dd className="mt-1 font-display text-lg font-bold">{project.year}</dd>
              </div>
              <div className="bg-cream p-4">
                <dt className="font-mono text-xs uppercase text-ink/60">دوري</dt>
                <dd className="mt-1 font-display text-lg font-bold">{project.role}</dd>
              </div>
              <div className="col-span-2 bg-cream p-4">
                <dt className="font-mono text-xs uppercase text-ink/60">التقنيات</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </dd>
              </div>
              {project.status && (
                <div className="col-span-2 bg-cream p-4">
                  <dt className="font-mono text-xs uppercase text-ink/60">الحالة</dt>
                  <dd className="mt-1 font-display text-base font-bold leading-snug">{project.status}</dd>
                </div>
              )}
            </dl>
          </aside>
        </div>
      </Section>

      {/* تفاصيل المشروع */}
      <Section className="!pt-0">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="space-y-10 md:col-span-7">
            <Reveal>
              <h2 className="section-title">نظرة عامة</h2>
              <p className="mt-4 text-lg leading-loose text-ink/85">{project.overview}</p>
            </Reveal>

            <Reveal>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="card-brutal bg-pink p-6">
                  <h3 className="font-display text-xl font-extrabold">التحدّي</h3>
                  <p className="mt-2 leading-relaxed">{project.problem}</p>
                </div>
                <div className="card-brutal bg-cyan p-6">
                  <h3 className="font-display text-xl font-extrabold">الحل</h3>
                  <p className="mt-2 leading-relaxed">{project.solution}</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* المميّزات + النتائج */}
          <aside className="space-y-8 md:col-span-5">
            <Reveal>
              <div className="card-brutal bg-cream p-6">
                <h3 className="font-display text-xl font-extrabold">أبرز المميّزات</h3>
                <ul className="mt-4 space-y-3">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-3 leading-relaxed">
                      <span
                        className="mt-1 inline-block h-3 w-3 shrink-0 border-2 border-ink"
                        style={{ backgroundColor: project.accent }}
                        aria-hidden="true"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {project.results?.length > 0 && (
              <Reveal>
                <div className="card-brutal bg-yellow p-6">
                  <h3 className="font-display text-xl font-extrabold">النتائج</h3>
                  <ul className="mt-3 space-y-2">
                    {project.results.map((r) => (
                      <li key={r} className="flex items-start gap-2 font-semibold">
                        <span aria-hidden="true">✦</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}
          </aside>
        </div>
      </Section>

      {/* حالة دراسية مفصّلة (اختيارية) */}
      {project.caseStudy && (
        <div className="border-t-[3px] border-ink bg-cream">
          <Section>
            <Reveal>
              <span className="font-mono text-sm uppercase tracking-widest text-ink/60">
                /// حالة دراسية
              </span>
              <h2 className="section-title mt-2">{project.caseStudy.title}</h2>
            </Reveal>

            <div className="mt-9 space-y-8">
              {project.caseStudy.blocks.map((block) => (
                <Reveal key={block.heading}>
                  <div className="card-brutal bg-cream p-6 sm:p-8">
                    <h3 className="font-display text-2xl font-extrabold">
                      <span className="underline-brutal">{block.heading}</span>
                    </h3>

                    {block.text && (
                      <p className="mt-4 text-lg leading-loose text-ink/85">{block.text}</p>
                    )}

                    {block.list && (
                      <ul className="mt-4 space-y-3">
                        {block.list.map((item) => (
                          <li key={item} className="flex gap-3 leading-relaxed text-ink/85">
                            <span
                              className="mt-1 inline-block h-3 w-3 shrink-0 border-2 border-ink"
                              style={{ backgroundColor: project.accent }}
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {block.steps && (
                      <ol className="mt-5 grid gap-4 sm:grid-cols-2">
                        {block.steps.map((step, i) => (
                          <li key={step.title} className="border-[3px] border-ink bg-yellow p-5">
                            <div className="flex items-center gap-3">
                              <span className="flex h-8 w-8 shrink-0 items-center justify-center border-[3px] border-ink bg-cream font-display font-extrabold">
                                {i + 1}
                              </span>
                              <h4 className="font-display text-lg font-extrabold">{step.title}</h4>
                            </div>
                            <p className="mt-3 leading-relaxed text-ink/85">{step.text}</p>
                          </li>
                        ))}
                      </ol>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </Section>
        </div>
      )}

      {/* لقطات من المشروع — شريط أفقي + lightbox (قبل قسم «شاهد أيضًا») */}
      {project.images?.length > 0 && (
        <Section className="border-t-[3px] border-ink">
          <Reveal>
            <span className="font-mono text-sm uppercase tracking-widest text-ink/60">
              /// معرض
            </span>
            <h2 className="section-title mt-2">لقطات من المشروع 📸</h2>
          </Reveal>
          <Reveal className="-mx-5 mt-9 sm:-mx-8">
            <ImageStrip images={project.images} />
          </Reveal>
        </Section>
      )}

      {/* مشاريع ذات صلة (روابط داخلية) */}
      {related.length > 0 && (
        <div className="border-t-[3px] border-ink bg-yellow">
          <Section>
            <Reveal>
              <span className="font-mono text-sm uppercase tracking-widest text-ink/60">
                /// مشاريع ذات صلة
              </span>
              <h2 className="section-title mt-2">شاهد أيضًا</h2>
            </Reveal>
            <div className="mt-9 grid gap-7 sm:grid-cols-2">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 90}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </Section>
        </div>
      )}

      {/* تنقّل: المشروع التالي + كل الأعمال */}
      <Section className="flex flex-col items-center justify-between gap-5 sm:flex-row">
        <Link to="/projects" className="border-b-[3px] border-ink font-display text-lg font-bold hover:bg-yellow">
          ← كل الأعمال
        </Link>
        <Link
          to={`/projects/${next.slug}`}
          className="border-b-[3px] border-ink font-display text-lg font-bold hover:bg-yellow"
        >
          المشروع التالي: {next.title} ←
        </Link>
      </Section>
    </>
  )
}
