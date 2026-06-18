import { useEffect, useRef } from 'react'

// hook بسيط لإظهار العناصر تدريجيًا عند ظهورها في الشاشة (IntersectionObserver).
// الاستخدام: const ref = useReveal(); ثم <div ref={ref} className="reveal">
export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...options },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [options])

  return ref
}
