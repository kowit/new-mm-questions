import type { AppProps } from 'next/app'
import QuizFlowProvider from '@/contexts/QuizFlowProvider'
import '@/styles/globals.css'
import 'rsuite/dist/rsuite.min.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QuizFlowProvider>
      <Component {...pageProps} />
    </QuizFlowProvider>
  )
}
