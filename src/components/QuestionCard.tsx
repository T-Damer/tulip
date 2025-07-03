import Question from 'types/Question'

export default function QuestionCard({ question }: { question: Question }) {
  return (
    <>
      <h2 className="font-bold text-2xl">{question.title}</h2>
      <p className="italic">{question.description}</p>
      <div className="flex flex-wrap gap-2">
        {Object.entries(question.answers).map(([key, value]) => (
          <button
            key={key}
            className="w-full cursor-pointer rounded-lg bg-slate-300 p-2 leading-tight transition-colors hover:bg-slate-400"
          >
            {value}
          </button>
        ))}
      </div>
    </>
  )
}
