import { useQuizFlow } from '@/contexts/QuizFlowProvider'

const QuestionFooter = () => {
  const { diction, currentQuestion }: any = useQuizFlow()

  return (
    <div>
      <h4>{diction[currentQuestion]?.footer.title}</h4>
      <p>{diction[currentQuestion]?.footer.description}</p>
    </div>
  )
}

export default QuestionFooter
