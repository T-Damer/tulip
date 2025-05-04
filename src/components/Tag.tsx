import { PropsWithChildren } from 'react'

export default function Tag({ children }: PropsWithChildren) {
  return (
    <div className="opacity-50 px-1 rounded-2xl text-xs whitespace-nowrap border">
      {children}
    </div>
  )
}
