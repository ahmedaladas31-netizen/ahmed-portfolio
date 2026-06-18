import { Link } from 'react-router-dom'
import ProjectThumb from './ProjectThumb'
import Badge from './Badge'

// بطاقة مشروع قابلة للنقر بالكامل، تقود إلى صفحة المشروع (رابط داخلي).
export default function ProjectCard({ project }) {
  return (
    <article className="card-brutal group flex flex-col overflow-hidden transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg">
      <Link to={`/projects/${project.slug}`} className="block" aria-label={project.title}>
        <ProjectThumb project={project} />
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-wide text-ink/60">
            {project.category} · {project.year}
          </span>
          {project.statusShort && (
            <span className="border-2 border-ink bg-cream px-2 py-0.5 font-mono text-[10px] font-bold uppercase">
              {project.statusShort}
            </span>
          )}
        </div>

        <h3 className="font-display text-2xl font-extrabold leading-tight">
          <Link to={`/projects/${project.slug}`} className="hover:underline-brutal">
            {project.title}
          </Link>
        </h3>

        <p className="text-ink/80 leading-relaxed">{project.summary}</p>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.tech.slice(0, 3).map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        <Link
          to={`/projects/${project.slug}`}
          className="mt-2 inline-flex w-fit items-center gap-1 border-b-[3px] border-ink font-display font-bold transition-colors group-hover:bg-yellow"
        >
          عرض المشروع
          <span aria-hidden="true">←</span>
        </Link>
      </div>
    </article>
  )
}
