import RouteCard from './RouteCard'

const routes = [
  {
    href: '/',
    text: 'Main',
  },
  {
    href: '/profile',
    text: 'Profile',
  },
  {
    href: '/work',
    text: 'Work',
  },
]
export default function Navigator() {
  return (
    <nav className="flex flex-row sm:flex-col items-center min-w-32 min-h-32 sm:h-full border-t-2 sm:border-t-0 sm:border-r-2">
      {routes.map((props) => (
        <RouteCard key={props.text + props.href} {...props} />
      ))}
      <div className="flex flex-2 sm:flex-1 sm:w-full sm:h-full mix-blend-multiply noise-filter" />
    </nav>
  )
}
