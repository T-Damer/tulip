import { cn } from 'helpers/cn'
import hapticImpact from 'helpers/hapticImpact'
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
    href === '/work' && !Number.isNaN(Number(location.pathname.split('/')[2]))

  return (
    <NavLink
      to={href}
      onClick={() => hapticImpact()}
      className={({ isActive }) =>
        cn(
          isActive ? 'bg-black text-white' : '',
          isActive ? 'flex-3' : 'flex-1',
          'flex h-32 w-full flex-col items-center justify-center gap-1 border-black border-r-2 p-2 active:opacity-80 sm:h-auto sm:border-r-0 sm:border-b-2 dark:border-white-pale'
        )
      }
      viewTransition
    >
      <span className="-rotate-45 font-serif">
        <span className="hidden md:block">{text}</span>
        <span className="block md:hidden">
          {workDetailsPage ? 'To projects' : text}
        </span>
      </span>
    </NavLink>
  )
}
