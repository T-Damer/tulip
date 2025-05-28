import Tag from 'components/Tag'
import { SmallHeader } from 'components/Text'
import { cn } from 'helpers/cn'
import { Work } from 'helpers/constants'

export default function WorkListEntry({
  title,
  description,
  tags,
  isSelected,
  setSelected,
}: Work & { isSelected: boolean; setSelected: () => void }) {
  return (
    <div
      className={cn(
        isSelected ? 'flex-2 bg-black text-white' : 'flex-1',
        'dark:border-white-pale hover:bg-selection flex cursor-pointer flex-col justify-center gap-y-1 border-b-2 border-black p-2 transition-all'
      )}
      onClick={setSelected}
    >
      <SmallHeader>{title}</SmallHeader>
      <span className="line-clamp-3 text-sm leading-tight font-light opacity-50">
        {description}
      </span>
      <div className="flex flex-wrap gap-1">
        {tags.map((tag) => (
          <Tag key={Math.random()}>{tag}</Tag>
        ))}
      </div>
    </div>
  )
}
