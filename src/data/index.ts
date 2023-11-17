enum Question1Answers {
  OnMySide = 'on-my-side',
  OnMyBack = 'on-my-back',
  OnMyFront = 'on-my-front',
  Combination = 'combination'
}

enum Question2Answers {
  Twin = 'twin',
  TwinXL = 'twin-xl',
  Full = 'full',
  Queen = 'queen',
  King = 'king',
  SplitKing = 'split-king'
}

type Question1Answer =
  | Question1Answers.Combination
  | Question1Answers.OnMyBack
  | Question1Answers.OnMyFront
  | Question1Answers.OnMySide

type Question2Answer =
  | Question2Answers.Full
  | Question2Answers.Queen
  | Question2Answers.King
  | Question2Answers.SplitKing
  | Question2Answers.Twin
  | Question2Answers.TwinXL

type SelectedAnswers = {
  question1: Question1Answer
  question2: Question2Answer
}

export const initialQuestionAnswers: any = {
  question1: {
    question: 'What is your favorite sleep position?',
    answers: [
      { label: 'On my side', value: 'on-my-side' },
      { label: 'On my back', value: 'on-my-back' },
      { label: 'On my front', value: 'on-my-fronnt' },
      { label: 'Combination', value: 'combination' }
    ]
  },
  question2: {
    question: 'What size bed are you looking for?',
    answers: [
      { label: 'Twin', value: 'twin' },
      { label: 'Full', value: 'queen' },
      { label: 'King', value: 'king' },
      { label: 'Split King', value: 'split-king' }
    ]
  }
}

// EXAMPLE
export const selectedAnswersData: SelectedAnswers = {
  question1: Question1Answers.OnMyBack,
  question2: Question2Answers.Queen
}
