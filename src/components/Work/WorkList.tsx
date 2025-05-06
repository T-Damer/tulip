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
  const [search, setSearch] = useState('')

  const s = search.trim().toLowerCase()

  return (
    <div className="flex flex-col w-60 border-r-2">
      <Search value={search} setValue={setSearch} />
      <div className="overflow-y-scroll mb-2 h-[calc(100dvh_-_210px)] sm:h-full">
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
