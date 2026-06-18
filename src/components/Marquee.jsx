// شريط متحرّك (marquee) بنمط بروتالي — يكرّر العناصر أفقيًا بحركة مستمرة.
export default function Marquee({ items, className = '' }) {
  const row = [...items, ...items] // التكرار لحركة سلسة بلا فجوات
  return (
    <div className={`overflow-hidden border-y-[3px] border-ink bg-ink ${className}`}>
      <div className="flex w-max animate-marquee">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 whitespace-nowrap px-6 py-3 font-display text-lg font-bold text-cream"
          >
            {item}
            <span className="text-yellow" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
