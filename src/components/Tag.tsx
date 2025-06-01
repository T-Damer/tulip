import { PropsWithChildren } from 'react'

export default function Tag({ children }: PropsWithChildren) {
  return (
    <div className="rounded-xs border px-1 text-xs whitespace-nowrap opacity-50">
      {children}
    </div>
  )
}
