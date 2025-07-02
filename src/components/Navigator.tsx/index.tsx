import RouteCard from './RouteCard'

const routes = [
  {
    href: '/',
    text: 'Main',
  },
  {
    href: '/work',
    text: 'Work',
  },
]

export default function Navigator() {
  return (
    <nav className="flex h-32 min-h-32 min-w-32 select-none flex-row items-center border-t-2 sm:h-full sm:flex-col sm:border-t-0 sm:border-r-2 dark:border-white-pale">
      {routes.map((props) => (
        <RouteCard key={props.text + props.href} {...props} />
      ))}
    </nav>
  )
}
