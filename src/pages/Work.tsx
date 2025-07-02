import QuestionSwiper from 'components/QuestionSwiper'
import { useCallback, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

export default function WorkPage() {
  const { id } = useParams<{ id: string }>()

  const navigate = useNavigate()
  const [selected, setSelected] = useState(Number(id || 0))

  const onWorkClick = useCallback(
    (workNumber: number) => {
      void navigate(`/work/${workNumber}`)
      setSelected(workNumber)
    },
    [navigate]
  )

  return (
    <div className="flex h-full w-full overflow-y-auto">
      <div onClick={() => onWorkClick(selected)}>
        WorkDetails <QuestionSwiper />
      </div>
    </div>
  )
}
