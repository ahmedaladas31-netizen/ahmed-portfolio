import { Link } from 'react-router-dom'

// زر بنمط Neo-brutalism: حدود سميكة + ظل صلب + حركة عند المرور.
// يتحوّل تلقائيًا إلى <Link> (داخلي) أو <a> (خارجي) أو <button>.
const variants = {
  primary: 'bg-yellow text-ink',
  dark: 'bg-ink text-cream',
  pink: 'bg-pink text-ink',
  cyan: 'bg-cyan text-ink',
  cream: 'bg-cream text-ink',
}

const sizes = {
  md: 'px-5 py-2.5 text-base',
  lg: 'px-7 py-3.5 text-lg',
}

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const classes = [
    'inline-flex items-center justify-center gap-2 font-display font-bold',
    'border-[3px] border-ink shadow-brutal-sm',
    'transition-all duration-150',
    'hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal',
    'active:translate-x-0 active:translate-y-0 active:shadow-none',
    variants[variant],
    sizes[size],
    className,
  ].join(' ')

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  )
}
