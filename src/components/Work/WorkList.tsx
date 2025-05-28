import { useAutoAnimate } from '@formkit/auto-animate/react'
import { cn } from 'helpers/cn'
import { myWorks } from 'helpers/constants'
import { useState } from 'react'
import Search from './Search'
import WorkListEntry from './WorkListEntry'

export default function WorkList({
  selected,
  setSelected,
}: {
  selected: number
  setSelected: (newWork: number) => void
}) {
  const [parent] = useAutoAnimate({ disrespectUserMotionPreference: true })
  const [search, setSearch] = useState('')

  const s = search.trim().toLowerCase()
  const selectedWork = selected >= 0

  return (
    <div
      className={cn(
        'dark:border-white-pale flex w-full flex-col md:w-60 md:min-w-60 md:border-r-2',
        selectedWork ? 'hidden md:flex' : ''
      )}
    >
      <Search value={search} setValue={setSearch} />
      <div
        className="flex flex-col overflow-y-scroll will-change-scroll md:h-full"
        ref={parent}
      >
        {myWorks
          .filter(
            (work) =>
              work.company?.title.toLowerCase().includes(s) ||
              work.title.toLowerCase().includes(s) ||
              work.description.toLowerCase().includes(s) ||
              work.tags.find((tag) => tag.includes(s))
          )
          .map((props, index) => (
            <WorkListEntry
              {...props}
              isSelected={selected === index}
              setSelected={() => setSelected(index)}
              key={props.title + index}
            />
          ))}
        <div className="h-2" />
      </div>
    </div>
  )
}
