import { Tilt } from '@jdion/tilt-react'
import Signature from 'assets/icons/Signature'
import dither from 'assets/img/dither.jpg'
import HrText from 'components/HrText'
import ProjectsCarousel from 'components/ProjectsCarousel'
import TransitionWrapper from 'components/TransitionWrapper'

export default function MainPage() {
  return (
    <TransitionWrapper>
      <div className="flex flex-col gap-16 w-full h-full p-4 sm:py-8 sm:px-16">
        <div className="flex gap-8 items-center justify-between">
          <Tilt>
            <div className="relative">
              <img
                src={dither}
                className="w-64 border-16 border-b-80 border-white"
              />
              <Signature className="absolute bottom-2 right-0 -rotate-15" />
            </div>
          </Tilt>
          <div className="w-full">
            <HrText>bio</HrText>
            <p>About me</p>
          </div>
        </div>

        <ProjectsCarousel />
      </div>
    </TransitionWrapper>
  )
}
