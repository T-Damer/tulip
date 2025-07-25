import { cn } from 'helpers/cn'
import type { PropsWithChildren } from 'react'
import type { ClassNameProp, OnClickPropVoid } from 'types/Props'

export function SmallHeader({
  children,
  className,
}: PropsWithChildren & ClassNameProp) {
  return (
    <h2 className={cn('font-bold text-2xl leading-7', className)}>
      {children}
    </h2>
  )
}

export function LinkText({
  children,
  href,
  external,
  className,
  onClick,
}: PropsWithChildren &
  ClassNameProp &
  OnClickPropVoid & { href?: string | undefined; external?: boolean }) {
  return (
    <a
      className={cn(
        'decoration-wavy transition-all hover:text-gray-600 hover:underline dark:decoration-white',
        className
      )}
      href={href}
      target={external ? 'blank' : '_self'}
      onClick={onClick}
    >
      {children}
    </a>
  )
}
