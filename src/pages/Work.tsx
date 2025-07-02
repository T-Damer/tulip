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
    <div className="flex h-full w-full overflow-y-auto">
      {selected >= 0 ? (
        <div onClick={() => onWorkClick(selected)}>WorkDetails {selected}</div>
      ) : (
        <div className="hidden h-full w-full items-center justify-center xl:flex">
          <span>Select work to display</span>
        </div>
      )}
    </div>
  )
}
