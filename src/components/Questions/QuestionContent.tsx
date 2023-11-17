import { useQuizFlow } from '@/contexts/QuizFlowProvider'
import useQuestionProps from '@/hooks/useQuestionProps'
import { Button, RadioTile, RadioTileGroup } from 'rsuite'

const QuestionContent = () => {
  const { handleChange, handleGoNext, currentQuestion }: any = useQuizFlow()
  const { answers } = useQuestionProps()
  return (
    <>
      <RadioTileGroup
        name={currentQuestion}
        defaultValue={currentQuestion}
        inline
        aria-label={currentQuestion}
        onChange={handleChange}
      >
        {answers.map((answer: any) => (
          <RadioTile key={answer.value} label={answer.label} value={answer.value}></RadioTile>
        ))}
      </RadioTileGroup>
      <br />
      <Button appearance="primary" onClick={handleGoNext}>
        Next
      </Button>
    </>
  )
}

export default QuestionContent
