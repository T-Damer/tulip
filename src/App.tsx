import AnimatedRoutes from 'components/AnimatedRoutes'
import Navigator from 'components/Navigator.tsx'
import Overlay from 'components/Overlay'
import SocialLinks from 'components/SocialLinks'

export default function App() {
  return (
    <div className="relative h-dvh w-dvw overflow-hidden p-1 pb-6 sm:p-8">
      <Overlay />
      <div className="shadow-card flex h-full w-full flex-col-reverse border-2 sm:flex-row">
        <Navigator />
        <AnimatedRoutes />
      </div>
      <SocialLinks />
    </div>
  )
}
