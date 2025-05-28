import { PropsWithChildren } from 'react'
import { ClassNameProp } from 'types/Props'

export default function HrText({
  children,
  className,
}: PropsWithChildren & ClassNameProp) {
  return (
    <div className={className}>
      <p className="font-serif text-xs">{children}</p>
      <hr />
    </div>
  )
}
