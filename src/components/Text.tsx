import { PropsWithChildren } from 'react'

export function LinkText({
  children,
  href,
  external,
}: PropsWithChildren & { href?: string; external?: boolean }) {
  return (
    <a
      className="hover:underline decoration-wavy transition-all"
      href={href}
      target={external ? 'blank' : '_self'}
    >
      {children}
    </a>
  )
}
