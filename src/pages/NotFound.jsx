import Seo from '../components/Seo'
import Section from '../components/Section'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <>
      <Seo title="الصفحة غير موجودة" description="عذرًا، الصفحة التي تبحث عنها غير موجودة." />
      <Section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <span className="font-display text-8xl font-extrabold sm:text-9xl">٤٠٤</span>
        <h1 className="mt-4 section-title">هذه الصفحة غير موجودة</h1>
        <p className="mt-4 max-w-md text-lg text-ink/80">
          ربّما تغيّر الرابط أو حُذفت الصفحة. لنعد إلى بر الأمان.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button to="/" variant="dark" size="lg">العودة للرئيسية</Button>
          <Button to="/projects" variant="pink" size="lg">تصفّح الأعمال</Button>
        </div>
      </Section>
    </>
  )
}
