import Seo from '../components/Seo'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import { profile } from '../data/profile'
import { projects } from '../data/projects'

export default function Projects() {
  // بيانات منظّمة: قائمة أعمال (CollectionPage + ItemList)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'أعمال أحمد العدس',
    inLanguage: 'ar',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: projects.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.title,
        url: `${profile.siteUrl}/projects/${p.slug}`,
      })),
    },
  }

  return (
    <>
      <Seo
        title="الأعمال"
        description="مجموعة مشاريع أحمد العدس: بوتات واتساب وأنظمة أتمتة، لوحات تحكم، قوائم رقمية، ومتاجر إلكترونية مبنية بـ n8n وReact وNext.js."
        path="/projects"
        jsonLd={jsonLd}
      />

      <Section>
        <Reveal>
          <span className="font-mono text-sm uppercase tracking-widest text-ink/60">
            /// كل المشاريع ({projects.length})
          </span>
          <h1 className="section-title mt-2">الأعمال</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/80">
            مجموعة من المشاريع التي صمّمتها وطوّرتها — من بوتات واتساب وأنظمة الأتمتة ولوحات
            التحكم اللحظية إلى المتاجر الإلكترونية. كل مشروع يحكي قصة مشكلة وحلّ.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}
