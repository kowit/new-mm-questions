import React, { FunctionComponent, ReactNode, createContext, useCallback, useMemo, useState } from 'react'
import { contextHookFactory } from '@/helpers/contextHelpers'
import { initialDiction } from '@/data/diction'
import { initialQuestionAnswers, selectedAnswersData } from '@/data'

const initialState = {}

const QuizFlowContext = createContext(initialState)

interface Props {
  children?: ReactNode
}

const QuizFlowProvider: FunctionComponent<Props> = ({ children }) => {
  // Load initial state
  const [currentQuestion, setCurrentQuestion] = useState('question1')
  const [questionAnswers] = useState<any>(initialQuestionAnswers)
  const [selectedAnswers, setSelectedAnswers] = useState<any>(selectedAnswersData)
  const [diction] = useState<any>(initialDiction)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = useCallback(() => setIsModalOpen(true), [])
  const handleCloseModal = useCallback(() => {
    switch (currentQuestion) {
      case 'question2':
        setIsModalOpen(false)
        setCurrentQuestion('question1')
      default: {
        setIsModalOpen(false)
      }
    }
  }, [currentQuestion])

  const handleChange = useCallback((e: any) => {}, [])

  /**
   * If question is answered
   * - add answer to answers
   * - toggle show modal
   */
  const handleSubmit = useCallback((e: any) => {
    e.preventDefault()
    console.log('Submit clicked')
  }, [])

  /**
   * Handles goes back to previous question
   * - Handle any analytics that go with this.
   */
  const handleGoBack = useCallback((question: string) => {
    setCurrentQuestion(question)
  }, [])

  /**
   * Go to next question (toggled when user clicks 'Next' on modal)
   * Handle 'Next' analytics, anything related to skip. (if any)
   */
  const handleGoNext = useCallback(() => {
    handleOpenModal()
  }, [handleOpenModal])

  /**
   */
  const handleModalNext = useCallback(() => {
    switch (currentQuestion) {
      case 'question1':
        handleCloseModal()
        setCurrentQuestion('question2')

      case 'question2':
        handleCloseModal()
        setCurrentQuestion('question2')

      default: {
      }
    }
  }, [currentQuestion, handleCloseModal])

  /**
   * Go to next question (toggled when user clicks 'skip' on question
   * Handle 'skip' analytics, anything related to skip.
   */
  const handleSkip = useCallback(() => {}, [])

  const values = useMemo(() => {
    return {
      questionAnswers,
      diction,
      handleGoBack,
      handleGoNext,
      handleChange,
      handleSubmit,
      handleCloseModal,
      handleOpenModal,
      handleModalNext,
      isModalOpen,
      currentQuestion,
      handleSkip
    }
  }, [
    questionAnswers,
    diction,
    handleGoBack,
    handleGoNext,
    handleChange,
    handleSubmit,
    handleCloseModal,
    handleOpenModal,
    handleModalNext,
    isModalOpen,
    currentQuestion,
    handleSkip
  ])

  return <QuizFlowContext.Provider value={values}>{children}</QuizFlowContext.Provider>
}

const useQuizFlow = contextHookFactory(QuizFlowContext, 'QuizFlow')

export { useQuizFlow }
export default QuizFlowProvider
