// وسم صغير (tag) لعرض التقنيات والتصنيفات بنمط بروتالي.
export default function Badge({ children, className = '', ...rest }) {
  return (
    <span className={`tag ${className}`} {...rest}>
      {children}
    </span>
  )
}
