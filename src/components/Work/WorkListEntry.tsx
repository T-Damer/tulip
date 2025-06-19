import Tag from 'components/Tag'
import { SmallHeader } from 'components/Text'
import { cn } from 'helpers/cn'
import type { Work } from 'helpers/constants'

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
        isSelected ? 'bg-black text-white' : '',
        'flex cursor-pointer flex-col justify-center gap-y-3 border-black border-b-2 p-2 transition-opacity hover:bg-selection active:opacity-60 dark:border-white-pale'
      )}
      onClick={setSelected}
      onKeyDown={setSelected}
    >
      <div>
        <SmallHeader className="font-serif">{title}</SmallHeader>
        <span className="line-clamp-3 font-light text-sm leading-tight opacity-50">
          {description}
        </span>
      </div>
      <div className="flex flex-wrap gap-1">
        {tags.map((tag) => (
          <Tag key={Math.random()}>{tag}</Tag>
        ))}
      </div>
    </div>
  )
}
