import { PropsWithChildren } from 'react'

export default function Tag({ children }: PropsWithChildren) {
  return (
    <div className="rounded-2xl border px-1 text-xs whitespace-nowrap opacity-50">
      {children}
    </div>
  )
}
