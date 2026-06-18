# بورتفوليو أحمد العدس — Neo-brutalism

موقع بورتفوليو شخصي بنمط **Neo-brutalism**، مبني بـ **React + Vite + Tailwind CSS**،
بواجهة عربية كاملة (RTL) ومحسّن لمحركات البحث (SEO).

## ✨ المميّزات

- نمط **Neo-brutalism**: حدود سميكة، ظلال صلبة، ألوان جريئة، خطوط مميّزة.
- **واجهة عربية كاملة** مع دعم اتجاه RTL.
- **متجاوب بالكامل** على الجوال واللوحي والحاسب.
- **محسّن لمحركات البحث**:
  - وسوم `meta` كاملة (description، keywords، canonical).
  - **Open Graph** و **Twitter Cards** لمشاركة جذّابة.
  - **بيانات منظّمة (JSON-LD Schema)**: `Person`، `WebSite`، `ProfilePage`،
    `AboutPage`، `CollectionPage` + `ItemList`، `ContactPage`، `CreativeWork`، و `BreadcrumbList`.
  - `sitemap.xml` و `robots.txt`.
  - عناوين وأوصاف ديناميكية لكل صفحة عبر `react-helmet-async`.
  - HTML دلالي (`header`, `main`, `article`, `nav`, `footer`) ووصولية (a11y).
- **روابط داخلية** قوية بين المشاريع (مهمة للـ SEO وللتنقّل).
- صفحة لكل مشروع: `/projects/:slug`.

## 🚀 التشغيل

```bash
npm install      # تثبيت الحزم
npm run dev      # تشغيل بيئة التطوير (http://localhost:5173)
npm run build    # بناء نسخة الإنتاج في مجلد dist
npm run preview  # معاينة نسخة الإنتاج
```

## 📁 هيكل المشروع

```
portfolio/
├─ index.html              # meta tags + JSON-LD أساسي
├─ public/
│  ├─ robots.txt           # تعليمات الزواحف
│  ├─ sitemap.xml          # خريطة الموقع
│  ├─ site.webmanifest     # بيانات تطبيق الويب
│  ├─ favicon.svg          # أيقونة الموقع
│  └─ og-image.svg         # صورة المشاركة الاجتماعية
└─ src/
   ├─ components/          # المكوّنات (Navbar, Footer, Button, ProjectCard, Seo...)
   ├─ pages/               # الصفحات (Home, Projects, ProjectDetail, About, Contact)
   ├─ data/                # بياناتك: profile.js + projects.js
   ├─ hooks/               # useReveal (حركة الظهور عند التمرير)
   ├─ App.jsx              # المسارات (routing)
   ├─ main.jsx             # نقطة الدخول
   └─ index.css            # أنماط Tailwind + مكوّنات Neo-brutalism
```

## ✏️ ما الذي تعدّله؟

1. **`src/data/profile.js`** — اسمك، نبذتك، بريدك، روابطك، مهاراتك.
2. **`src/data/projects.js`** — مشاريعك (الوصف، الروابط، النتائج، التقنيات).
3. **النطاق (Domain)** — استبدل `https://www.ahmed-aladas.com` بنطاقك الحقيقي في:
   - `src/data/profile.js` (الحقل `siteUrl`)
   - `index.html` (روابط canonical/og و JSON-LD)
   - `public/robots.txt` و `public/sitemap.xml`
4. **صورة المشاركة** — يُفضّل استبدال `public/og-image.svg` بصورة **PNG بحجم 1200×630**
   باسم `og-image.png` (وتحديث الروابط)، لأن بعض المنصات لا تعرض صور SVG في المشاركات.

## 🔎 ملاحظة تقنية حول الـ SEO

هذا الموقع تطبيق صفحة واحدة (SPA). محرّك Google يعالج JavaScript ويقرأ وسوم
`react-helmet-async` و JSON-LD بشكل جيّد. للحصول على ضمان كامل مع كل الزواحف، يمكن لاحقًا
إضافة **Pre-rendering** أو **SSR** (مثل `vite-plugin-ssr` أو الانتقال إلى Next.js)،
لكن الإعداد الحالي قويّ ومناسب للنشر والعرض الأكاديمي.

---
صُمّم ووُطّر بنمط Neo-brutalism · React + Vite + Tailwind CSS
