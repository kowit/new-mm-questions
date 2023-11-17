import { useQuizFlow } from '@/contexts/QuizFlowProvider'

const QuestionHeader = () => {
  const { diction, currentQuestion }: any = useQuizFlow()

  return <h3>{diction[currentQuestion]?.header.title}</h3>
}

export default QuestionHeader
