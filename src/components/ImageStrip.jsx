import { useRef, useState } from 'react'
import Lightbox from './Lightbox'

// شريط صور أفقي بنمط Neo-brutalism: scroll-snap + إخفاء scrollbar + مؤشّر نقاط تفاعلي + lightbox.
// نضبط الاتجاه ltr داخلياً لتفادي مشاكل التمرير في صفحات RTL (الكابشن يبقى rtl).
export default function ImageStrip({ images }) {
  const scrollerRef = useRef(null)
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState(null) // فهرس الصورة المفتوحة أو null

  // تحديد الصورة الأقرب لمركز الشريط لتحديث النقطة النشطة
  const handleScroll = () => {
    const el = scrollerRef.current
    if (!el) return
    const center = el.scrollLeft + el.clientWidth / 2
    let idx = 0
    let min = Infinity
    Array.from(el.children).forEach((child, i) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2
      const dist = Math.abs(childCenter - center)
      if (dist < min) {
        min = dist
        idx = i
      }
    })
    setActive(idx)
  }

  const scrollToIndex = (i) => {
    const el = scrollerRef.current
    if (!el) return
    const child = el.children[i]
    if (child) el.scrollTo({ left: child.offsetLeft - 20, behavior: 'smooth' })
  }

  return (
    <div>
      <ul
        ref={scrollerRef}
        onScroll={handleScroll}
        dir="ltr"
        className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-pl-5 px-5 pb-2"
      >
        {images.map((img, i) => (
          <li
            key={img.src}
            className="w-[78vw] max-w-[320px] shrink-0 snap-start lg:max-w-[380px]"
          >
            <figure>
              <button
                type="button"
                onClick={() => setLightbox(i)}
                aria-label={`تكبير الصورة: ${img.alt}`}
                className="group block w-full cursor-zoom-in"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-[240px] w-full border-[2.5px] border-black bg-cream object-cover shadow-[4px_4px_0_#000] transition-all duration-150 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-[6px_6px_0_#000]"
                />
              </button>
              <figcaption
                dir="rtl"
                className="mt-2 text-right font-mono text-[11px] leading-relaxed text-ink/70"
              >
                {img.alt}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      {/* مؤشّر النقاط */}
      <div className="mt-5 flex justify-center gap-2">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => scrollToIndex(i)}
            aria-label={`الانتقال إلى الصورة ${i + 1}`}
            aria-current={active === i}
            className={`h-3 border-2 border-ink transition-all ${
              active === i ? 'w-6 bg-ink' : 'w-3 bg-cream'
            }`}
          />
        ))}
      </div>

      {lightbox !== null && (
        <Lightbox
          images={images}
          index={lightbox}
          onChange={setLightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  )
}
