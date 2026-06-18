import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// يعيد التمرير إلى أعلى الصفحة عند تغيّر المسار.
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
