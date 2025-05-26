import Tag from 'components/Tag'
import { SmallHeader } from 'components/Text'
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
      className={[
        isSelected ? 'bg-black text-white' : '',
        'dark:border-white-pale hover:bg-selection flex cursor-pointer flex-col gap-y-1 border-b-2 border-black p-2 transition-colors',
      ].join(' ')}
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
