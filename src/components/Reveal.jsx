import { useReveal } from '../hooks/useReveal'

// غلاف يُظهر محتواه تدريجيًا عند التمرير إليه. يدعم تأخيرًا اختياريًا (delay بالملّي ثانية).
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const ref = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  )
}
