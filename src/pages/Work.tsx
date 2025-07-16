import Header from 'components/Header'
import QuestionSwiper from 'components/QuestionSwiper'
import TransitionWrapper from 'components/TransitionWrapper'

export default function WorkPage() {
  return (
    <TransitionWrapper className="overflow-auto overflow-y-hidden">
      <Header />
      <div className="mt-8 flex h-full">
        <QuestionSwiper />
      </div>
    </TransitionWrapper>
  )
}
