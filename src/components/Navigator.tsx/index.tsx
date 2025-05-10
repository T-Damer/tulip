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
    <nav className="flex flex-row sm:flex-col items-center min-w-32 h-32 min-h-32 md:h-full border-t-2 md:border-t-0 md:border-r-2">
      {routes.map((props) => (
        <RouteCard key={props.text + props.href} {...props} />
      ))}
      <div className="flex flex-2 md:flex-1 sm:w-full md:h-full mix-blend-multiply noise-filter" />
    </nav>
  )
}
