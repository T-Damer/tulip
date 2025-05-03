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
    <nav className="flex flex-row sm:flex-col items-center min-w-32 h-full border-r-2">
      {routes.map((props) => (
        <RouteCard key={props.text + props.href} {...props} />
      ))}
      <div className="flex flex-1 w-full h-full mix-blend-multiply noise-filter" />
    </nav>
  )
}
