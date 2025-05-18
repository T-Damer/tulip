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
    <div className="flex h-full w-full">
      <WorkList selected={selected} setSelected={onWorkClick} />
      {selected >= 0 ? (
        <WorkDetails {...myWorks[selected]} />
      ) : (
        <div className="hidden h-full w-full items-center justify-center xl:flex">
          <span>Select work to display</span>
        </div>
      )}
    </div>
  )
}
