import Question from '@/components/Questions/Question'
import { useQuizFlow } from '@/contexts/QuizFlowProvider'

export default function Home() {
  const { currentQuestion }: any = useQuizFlow()

  return (
    <main className="mx-auto max-w-screen-sm">
      <h1>Quiz Flow</h1>
      <br />
      <div>{currentQuestion}</div>
      <br />
      <Question />
    </main>
  )
}
