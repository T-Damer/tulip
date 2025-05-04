import TransitionWrapper from 'components/TransitionWrapper'
import WorkDetails from 'components/Work/WorkDetails'
import WorkList from 'components/Work/WorkList'
import { myWorks } from 'helpers/constants'
import { useState } from 'react'
import { useLocation } from 'react-router'

const latestWork = myWorks.length - 1

export default function WorkPage() {
  const location = useLocation()
  //   TODO: should put work-index into location and use it as source for state
  console.log(location.pathname)
  const [selected, setSelected] = useState(latestWork)

  return (
    <TransitionWrapper>
      <div className="flex w-full h-full">
        <WorkList selected={selected} setSelected={setSelected} />
        <WorkDetails {...myWorks[selected]} />
      </div>
    </TransitionWrapper>
  )
}
