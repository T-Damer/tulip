import { PropsWithChildren } from 'react'

export default function HrText({ children }: PropsWithChildren) {
  return (
    <>
      <p className="font-serif text-xs">{children}</p>
      <hr />
    </>
  )
}
