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
    <div className="relative flex flex-col w-60 overflow-y-scroll border-r-2 pb-2">
      <Search value={search} setValue={setSearch} />
      {myWorks
        .concat(myWorks)
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
  )
}
