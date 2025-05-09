import { useAutoAnimate } from '@formkit/auto-animate/react'
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
      className={[
        'flex-col w-full md:w-60 md:min-w-60 md:border-r-2',
        selectedWork ? 'hidden sm:flex' : '',
      ].join(' ')}
    >
      <Search value={search} setValue={setSearch} />
      <div
        className="overflow-y-scroll mb-2 h-[calc(100dvh_-_210px)] md:h-full"
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
      </div>
    </div>
  )
}
