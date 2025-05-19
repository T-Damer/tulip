import RouteCard from './RouteCard'

const routes = [
  {
    href: '/',
    text: 'Main',
  },
  // {
  //   href: '/profile',
  //   text: 'Profile',
  // },
  {
    href: '/work',
    text: 'Work',
  },
]
export default function Navigator() {
  return (
    <nav className="flex h-32 min-h-32 min-w-32 flex-row items-center border-t-2 sm:h-full sm:flex-col sm:border-t-0 sm:border-r-2">
      {routes.map((props) => (
        <RouteCard key={props.text + props.href} {...props} />
      ))}
      <div className="noise-filter flex flex-2 mix-blend-multiply sm:w-full md:h-full md:flex-1" />
    </nav>
  )
}
