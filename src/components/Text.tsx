import { PropsWithChildren } from 'react'
import { ClassNameProp } from 'types/Props'

export function SmallHeader({
  children,
  className,
}: PropsWithChildren & ClassNameProp) {
  return <h2 className={className + ' text-2xl font-bold'}>{children}</h2>
}

export function LinkText({
  children,
  href,
  external,
  className,
}: PropsWithChildren &
  ClassNameProp & { href?: string | undefined; external?: boolean }) {
  return (
    <a
      className={
        className +
        ' decoration-wavy transition-all hover:text-gray-600 hover:underline'
      }
      href={href}
      target={external ? 'blank' : '_self'}
    >
      {children}
    </a>
  )
}
