// =====================================================================
// بياناتك الشخصية — عدّلها بحرية (الاسم، النبذة، الروابط، المهارات).
// تُستخدم في الـ SEO (schema markup) وفي كل صفحات الموقع.
// =====================================================================

export const profile = {
  name: 'أحمد العدس',
  nameEn: 'Ahmad Al-Adas',
  role: 'أطور مواقع وأتمتة مدعومة بالذكاء الاصطناعي',
  roleEn: 'Web Development & AI-Powered Automation',

  // عنوان قوي يظهر في الواجهة الرئيسية
  tagline:
    'أبني مواقع وأتمتة مدعومة بالذكاء الاصطناعي لتحويل العمليات اليدوية إلى أنظمة تعمل بشكل أكثر كفاءة.',

  // نبذة للصفحة الرئيسية وصفحة «عني» — تركّز على «ماذا أفعل» لا «من أنا فقط»
  bio: 'أنا أحمد، من جنين، فلسطين. بصمّم مواقع وبأبني أتمتة مدعومة بالذكاء الاصطناعي. عملت بوت واتساب بشتغل كمساعد شخصي، وبوت تاني بيجاوب على أسئلة العملاء وبيسجّل الطلبات تلقائياً — وبقدر أبني غيرها حسب احتياج كل شغلة.',

  // فقرة ثانية في صفحة «عني» — قصة التعلّم والتنفيذ
  story:
    'قصتي بسيطة: بلّشت أتعلّم HTML، وخطوة بخطوة وصلت لبناء مواقع متطورة وأنظمة أتمتة مدعومة بالذكاء الاصطناعي — كل مهارة تعلّمتها كان وراها مشروع حقيقي نفّذته بإيدي. أنا لسا بتعلّم وما بدّعي إني محترف، بس اللي بشتغل عليه بطلّعه شغّال على أرض الواقع.',

  // ضع نطاقك الحقيقي هنا قبل النشر — يُستخدم في canonical و sitemap و schema
  siteUrl: 'https://ahmed-portfolio-gules.vercel.app',

  email: 'ahmedaladas4@gmail.com',
  phone: '+970 59 766 6336',
  // رابط واتساب مباشر (صيغة wa.me) — يُستخدم في أزرار «راسلني» لفتح محادثة فوراً
  whatsapp: `https://wa.me/970597666336?text=${encodeURIComponent('مرحبا أحمد 👋، تواصلت معك من خلال موقعك.')}`,
  location: 'جنين، فلسطين · متاح عن بُعد',
  availability: 'متاح لمشاريع جديدة',

  // روابطك — ضع روابطك الحقيقية (تظهر في الفوتر وفي schema sameAs)
  social: [
    { label: 'GitHub', href: 'https://github.com/ahmedaladas31-netizen' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ahmed-aladas-5aa772367' },
    { label: 'Instagram', href: 'https://www.instagram.com/ahmad_aladas2003' },
    { label: 'Facebook', href: 'https://www.facebook.com/share/17q63ikfqX/' },
  ],

  // قائمة مسطّحة تُستخدم في الشريط المتحرّك و schema (knowsAbout)
  skills: [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'n8n',
    'OpenAI GPT-4o',
    'WhatsApp Business API',
    'Supabase',
    'Technical SEO',
    'Google Search Console',
    'GA4',
    'Schema Markup',
    'Git & GitHub',
    'Netlify',
    'Cloudinary',
  ],

  // مهارات مصنّفة تُعرض في صفحة «عني» بشكل منظّم واضح
  skillGroups: [
    {
      title: 'تطوير الواجهات الأمامية',
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML / CSS'],
    },
    {
      title: 'الأتمتة والذكاء الاصطناعي',
      items: ['n8n', 'OpenAI GPT-4o', 'WhatsApp Business API', 'AI Agents'],
    },
    {
      title: 'قواعد البيانات',
      items: ['Supabase', 'PostgreSQL'],
    },
    {
      title: 'تحسين محركات البحث',
      items: ['Technical SEO', 'GA4', 'Google Search Console', 'Schema Markup'],
    },
    {
      title: 'الأدوات',
      items: ['Git', 'GitHub', 'Netlify', 'Cloudinary'],
    },
  ],

  services: [
    {
      title: 'أتمتة الأعمال وبوتات واتساب',
      desc: 'بوتات تستقبل الطلبات وتتابعها تلقائياً، مع إشعارات فورية للزبائن والموظفين — بربط الأنظمة ببعضها عبر n8n (WhatsApp، قواعد بيانات، Sheets، CRM).',
    },
    {
      title: 'مساعدون أذكياء بالذكاء الاصطناعي',
      desc: 'مساعد ذكي يرد على العملاء، يصنّف الطلبات، ويدعم خدمة العملاء على مدار الساعة باستخدام GPT-4o بلغة تناسب زبائنك.',
    },
    {
      title: 'تطوير واجهات أمامية',
      desc: 'واجهات ومتاجر سريعة وتفاعلية بـ React وNext.js، بكود نظيف وقابل للصيانة ودعم كامل للعربية (RTL).',
    },
    {
      title: 'تحسين محركات البحث',
      desc: 'بنية تقنية سليمة، Schema Markup، وربط GA4 وGoogle Search Console لظهور أقوى على Google.',
    },
  ],
}
