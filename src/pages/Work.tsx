import QuestionSwiper from 'components/QuestionSwiper'
import TransitionWrapper from 'components/TransitionWrapper'

export default function WorkPage() {
  return (
    <TransitionWrapper className="overflow-auto">
      <div className="flex h-full w-full items-center justify-center">
        <QuestionSwiper />
      </div>
    </TransitionWrapper>
  )
}
