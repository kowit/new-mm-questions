import { useQuizFlow } from '@/contexts/QuizFlowProvider'
import React, { Modal, Button, Placeholder } from 'rsuite'

const QuestionTransitionDialog = () => {
  const { isModalOpen, handleCloseModal, handleModalNext }: any = useQuizFlow()

  return (
    <Modal size="sm" open={isModalOpen} onClose={handleCloseModal}>
      <Modal.Header>
        <Modal.Title>Modal Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Placeholder.Paragraph />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCloseModal} appearance="subtle">
          Back
        </Button>
        <Button onClick={handleModalNext} appearance="primary">
          Next
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default QuestionTransitionDialog
