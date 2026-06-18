// صورة مصغّرة مولّدة بنمط Neo-brutalism (بدون صور خارجية) — كتلة لونية
// جريئة تحمل اسم المشروع وأشكالًا هندسية. استبدلها بصورة حقيقية متى شئت.
export default function ProjectThumb({ project, className = '' }) {
  const { titleEn, category, accent, text } = project
  return (
    <div
      className={`relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden border-b-[3px] border-ink ${className}`}
      style={{ backgroundColor: accent, color: text }}
      aria-hidden="true"
    >
      {/* أشكال زخرفية */}
      <div className="absolute -right-6 -top-6 h-24 w-24 rotate-12 border-[3px] border-ink/30" />
      <div className="absolute bottom-3 left-3 h-10 w-10 rounded-full border-[3px] border-ink/40" />
      <div className="absolute right-4 bottom-4 font-mono text-[10px] font-semibold uppercase tracking-widest opacity-70">
        {category}
      </div>

      <span className="px-4 text-center font-display text-3xl font-extrabold leading-none sm:text-4xl">
        {titleEn}
      </span>
    </div>
  )
}
