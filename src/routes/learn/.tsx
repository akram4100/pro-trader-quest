import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/learn/$levelId')({
  component: LessonList,
})

function LessonList() {
  const { levelId } = Route.useParams()

  return (
    <main dir="rtl" style={{ padding: '24px', maxWidth: '900px', margin: 'auto' }}>
      <Link to="/learn" style={{ display: 'inline-block', marginBottom: '24px' }}>
        ← العودة إلى المستويات
      </Link>

      <h1>دروس المستوى {levelId}</h1>

      <div style={{ marginTop: '24px' }}>
        <p>اختر درسًا للبدء بالتعلم.</p>

        <div
          style={{
            display: 'grid',
            gap: '12px',
            marginTop: '20px',
          }}
        >
          {[1, 2, 3, 4, 5].map((lesson) => (
            <Link
              key={lesson}
              to="/learn/$levelId/lesson/$lessonId"
              params={{
                levelId,
                lessonId: String(lesson),
              }}
              style={{
                padding: '18px',
                border: '1px solid #333',
                borderRadius: '12px',
                textDecoration: 'none',
              }}
            >
              الدرس {lesson}
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
