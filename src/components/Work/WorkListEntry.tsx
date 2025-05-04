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
        'flex flex-col gap-y-1 border-b-2 cursor-pointer p-2',
      ].join(' ')}
      onClick={setSelected}
    >
      <SmallHeader>{title}</SmallHeader>
      <span className="font-light">{description}</span>
      <div className="flex flex-wrap gap-1">
        {tags.map((tag) => (
          <Tag key={Math.random()}>{tag}</Tag>
        ))}
      </div>
    </div>
  )
}
