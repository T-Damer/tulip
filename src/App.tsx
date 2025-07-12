import AnimatedRoutes from 'components/AnimatedRoutes'
import { BgGradients } from 'components/BgGradients'

export default function App() {
  return (
    <div className="relative h-dvh w-dvw overflow-hidden">
      <BgGradients />
      <div className="flex h-full w-full flex-col">
        <AnimatedRoutes />
      </div>
    </div>
  )
}
