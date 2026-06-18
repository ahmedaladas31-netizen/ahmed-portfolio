import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'

// عارض صور fullscreen بنمط Neo-brutalism فخم:
// أسهم تنقّل + دعم لوحة المفاتيح (Esc / ← / →) + عدّاد + شريط مصغّرات + قفل تمرير الصفحة + أنيميشن.
export default function Lightbox({ images, index, onChange, onClose }) {
  const total = images.length

  const go = useCallback(
    (dir) => onChange((index + dir + total) % total),
    [index, total, onChange]
  )

  // لوحة المفاتيح + قفل تمرير صفحة الخلفية أثناء فتح العارض
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [go, onClose])

  const current = images[index]
  const stop = (e) => e.stopPropagation()

  return createPortal(
    <div
      className="animate-lb-fade fixed inset-0 z-[100] flex flex-col gap-3 bg-ink/95 p-4 backdrop-blur-md sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="عارض الصور"
      onClick={onClose}
    >
      {/* شريط علوي: عدّاد + زر إغلاق */}
      <div className="flex items-center justify-between">
        <span className="border-2 border-cream/25 bg-ink px-3 py-1 font-mono text-sm font-bold text-cream">
          {index + 1} / {total}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="إغلاق"
          className="flex h-11 w-11 items-center justify-center border-[3px] border-ink bg-yellow font-display text-xl font-extrabold text-ink shadow-[4px_4px_0_#000] transition-transform duration-300 hover:rotate-90"
        >
          ✕
        </button>
      </div>

      {/* منطقة الصورة (النقر على الفراغ الداكن يُغلق) */}
      <div className="relative flex flex-1 items-center justify-center overflow-hidden">
        {total > 1 && (
          <button
            type="button"
            onClick={(e) => { stop(e); go(-1) }}
            aria-label="السابق"
            className="absolute left-1 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center border-[3px] border-ink bg-cream font-display text-3xl font-extrabold leading-none text-ink shadow-[4px_4px_0_#000] transition-all hover:bg-yellow sm:left-2"
          >
            ‹
          </button>
        )}

        <figure className="flex max-h-full items-center">
          <img
            key={current.src}
            src={current.src}
            alt={current.alt}
            onClick={stop}
            className="animate-lb-zoom max-h-[72vh] max-w-full border-[3px] border-cream bg-ink object-contain shadow-[10px_10px_0_#FFE600]"
          />
        </figure>

        {total > 1 && (
          <button
            type="button"
            onClick={(e) => { stop(e); go(1) }}
            aria-label="التالي"
            className="absolute right-1 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center border-[3px] border-ink bg-cream font-display text-3xl font-extrabold leading-none text-ink shadow-[4px_4px_0_#000] transition-all hover:bg-yellow sm:right-2"
          >
            ›
          </button>
        )}
      </div>

      {/* كابشن + شريط مصغّرات */}
      <div className="shrink-0">
        <p className="mx-auto max-w-3xl text-center font-mono text-xs leading-relaxed text-cream/80 sm:text-sm">
          {current.alt}
        </p>
        {total > 1 && (
          <div className="no-scrollbar mt-3 flex justify-start gap-2 overflow-x-auto px-1 sm:justify-center">
            {images.map((t, i) => (
              <button
                key={t.src}
                type="button"
                onClick={(e) => { stop(e); onChange(i) }}
                aria-label={`الانتقال إلى الصورة ${i + 1}`}
                aria-current={i === index}
                className={`h-12 w-16 shrink-0 overflow-hidden border-2 transition-all ${
                  i === index
                    ? 'border-yellow opacity-100'
                    : 'border-cream/25 opacity-50 hover:opacity-100'
                }`}
              >
                <img src={t.src} alt="" loading="lazy" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>,
    document.body
  )
}
