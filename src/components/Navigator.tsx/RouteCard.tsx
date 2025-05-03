import { NavLink } from 'react-router'

export default function RouteCard({
  href,
  text,
}: {
  href: string
  text: string
  icon?: string
}) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        [
          isActive ? 'bg-black text-white' : '',
          isActive ? 'flex-3' : 'flex-1',
          'flex flex-col w-full transition-all items-center justify-center gap-1 p-2 border-b-2 border-black active:bg-accent',
        ].join(' ')
      }
      viewTransition
    >
      {text}
    </NavLink>
  )
}
