import type { PropsWithChildren } from 'react'

export default function Tag({ children }: PropsWithChildren) {
  return (
    <div className="whitespace-nowrap rounded-xs border px-1 text-xs opacity-50">
      {children}
    </div>
  )
}
