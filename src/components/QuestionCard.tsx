import { cn } from 'helpers/cn'

import { Question } from 'types/Question'

interface QuestionCardProps {
  question: Question
  onClick: (answer: number) => void
  selectedAnswerId?: number | undefined
  showBackButton?: boolean
  onBack?: () => void
}

export default function QuestionCard({
  question,
  onClick,
  selectedAnswerId,
  showBackButton = false,
  onBack = () => {},
}: QuestionCardProps) {
  return (
    <div className="flex h-full flex-col justify-between gap-4">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-2 leading-tight">
          <h2 className="font-bold text-2xl text-black leading-tight">
            {showBackButton && (
              <button
                onClick={onBack}
                className="mr-2 cursor-pointer text-gray-600 hover:text-gray-900"
              >
                ←
              </button>
            )}
            {question.title}
          </h2>
          <p className="whitespace-pre-wrap text-black italic">
            {question.description}
          </p>
        </div>
      </div>
      <hr className="h-px w-full text-black" />
      <div className="flex flex-wrap gap-2">
        {Object.entries(question.answers).map(([key, value]) => (
          <button
            key={key}
            className={cn(
              'w-full cursor-pointer rounded-lg p-2 text-black leading-tight transition-colors hover:bg-slate-400',
              selectedAnswerId === Number(key)
                ? 'bg-slate-500'
                : 'bg-slate-300',
              selectedAnswerId === Number(key) ? 'text-white' : 'text-black'
            )}
            onClick={() => onClick(Number(key))}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  )
}
