import { Helmet } from 'react-helmet-async'
import { profile } from '../data/profile'

// مكوّن SEO: يضبط العنوان، الوصف، canonical، Open Graph، Twitter، و JSON-LD
// لكل صفحة على حدة. هذا جوهر الـ on-page و technical SEO في الموقع.
export default function Seo({
  title,
  description,
  path = '',
  image = '/og-image.svg',
  type = 'website',
  jsonLd,
}) {
  const url = profile.siteUrl + path
  const fullTitle = title ? `${title} — ${profile.name}` : `${profile.name} — ${profile.role}`
  const desc = description || profile.tagline
  const imgUrl = image.startsWith('http') ? image : profile.siteUrl + image

  return (
    <Helmet>
      <html lang="ar" dir="rtl" />
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={`${profile.name} — بورتفوليو`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:locale" content="ar_AR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={imgUrl} />

      {/* بيانات منظّمة إضافية خاصة بالصفحة */}
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  )
}
