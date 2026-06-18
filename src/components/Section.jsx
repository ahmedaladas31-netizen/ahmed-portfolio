// غلاف قسم موحّد للمسافات والعرض الأقصى.
export default function Section({ children, className = '', id }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20 ${className}`}>
      {children}
    </section>
  )
}
