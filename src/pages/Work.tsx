import WorkDetails from 'components/Work/WorkDetails'
import WorkList from 'components/Work/WorkList'
import { myWorks } from 'helpers/constants'
import { useCallback, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

export default function WorkPage() {
  const { id } = useParams<{ id: string }>()

  const navigate = useNavigate()
  const [selected, setSelected] = useState(Number(id || -1))

  const onWorkClick = useCallback(
    (workNumber: number) => {
      void navigate(`/work/${workNumber}`)
      setSelected(workNumber)
    },
    [navigate]
  )

  return (
    <div className="flex w-full h-full">
      <WorkList selected={selected} setSelected={onWorkClick} />
      {selected >= 0 ? <WorkDetails {...myWorks[selected]} /> : null}
    </div>
  )
}
