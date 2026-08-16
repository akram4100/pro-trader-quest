import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/learn/$levelId')({
  component: LevelPage,
})

function LevelPage() {
  const { levelId } = Route.useParams()

  return (
    <main style={{ padding: '24px' }}>
      <h1>المستوى {levelId}</h1>
      <p>محتوى الدرس سيظهر هنا.</p>
    </main>
  )
}
