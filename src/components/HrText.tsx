import { PropsWithChildren } from 'react'

export default function HrText({ children }: PropsWithChildren) {
  return (
    <>
      <p className="text-xs font-serif">{children}</p>
      <hr />
    </>
  )
}
