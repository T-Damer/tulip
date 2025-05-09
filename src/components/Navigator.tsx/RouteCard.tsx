import { NavLink, useLocation } from 'react-router'

export default function RouteCard({
  href,
  text,
}: {
  href: string
  text: string
  icon?: string
}) {
  const location = useLocation()
  const workDetailsPage =
    href === '/work' &&
    !isNaN(location.pathname.split('/')[2]?.search(/[0-9]+/))

  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        [
          isActive ? 'bg-black text-white' : '',
          isActive ? 'flex-3' : 'flex-1',
          'flex flex-col w-full h-32 sm:h-auto transition-all items-center justify-center gap-1 p-2 border-r-2 sm:border-r-0 sm:border-b-2 border-black active:bg-accent',
        ].join(' ')
      }
      viewTransition
    >
      <span className="-rotate-45">
        {workDetailsPage ? 'To projects' : text}
      </span>
    </NavLink>
  )
}
