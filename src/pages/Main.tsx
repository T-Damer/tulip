import Card from 'components/Card'
import TransitionWrapper from 'components/TransitionWrapper'
import { useNavigate } from 'react-router'

export default function MainPage() {
  const navigate = useNavigate()

  return (
    <TransitionWrapper className="overflow-auto">
      <div className="flex h-full flex-col items-center justify-center gap-8 p-2 md:flex-row">
        <Card
          className="items-center justify-center font-bold text-2xl text-black transition-all hover:bg-slate-200 active:scale-110"
          onClick={() => navigate('/questions?role=doctor')}
        >
          Врач
        </Card>
        <Card
          className="items-center justify-center font-bold text-2xl text-black transition-all hover:bg-slate-200 active:scale-110"
          onClick={() => navigate('/questions?role=patient')}
        >
          Пациент
        </Card>
      </div>
    </TransitionWrapper>
  )
}
