import { useQuizFlow } from '@/contexts/QuizFlowProvider'

const useQuestionProps = () => {
  const { questionAnswers, currentQuestion }: any = useQuizFlow()

  console.log('~questionAnswers', questionAnswers)
  console.log('~currentQuestion', currentQuestion)

  switch (currentQuestion) {
    case 'question1':
      return {
        answers: questionAnswers[currentQuestion]?.answers ?? []
      }
    case 'question2':
      return {
        answers: questionAnswers[currentQuestion]?.answers ?? []
      }
    default:
      return { answers: [] }
  }
}

export default useQuestionProps
