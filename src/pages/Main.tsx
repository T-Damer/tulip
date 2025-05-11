import { Tilt } from '@jdion/tilt-react'
import Signature from 'assets/icons/Signature'
import dither from 'assets/img/dither.jpg'
import HrText from 'components/HrText'
import ProjectsCarousel from 'components/ProjectsCarousel'
import TransitionWrapper from 'components/TransitionWrapper'

export default function MainPage() {
  return (
    <TransitionWrapper>
      <div className="flex flex-col gap-16 w-full h-full p-4 sm:py-8 sm:px-44 items-center justify-center">
        <div className="flex flex-col sm:flex-row gap-8 items-center justify-between ">
          <Tilt className="flex items-center justify-center">
            <div className="relative">
              <img
                src={dither}
                className="w-40 sm:w-64 border-16 border-b-80 border-white"
              />
              <Signature className="absolute bottom-2 right-0 -rotate-15" />
            </div>
          </Tilt>
          <div className="w-full">
            <HrText>bio</HrText>
            <p>
              Innovative Full Stack Web3 Developer driving impactful blockchain
              solutions. Proficient in crafting dynamic Web3 applications. Adept
              at developing responsive user interfaces and robust backends,
              ensuring seamless functionality across all platforms. Committed to
              leveraging blockchain to create engaging experiences and enhance
              user interaction in decentralized applications. Ready to
              contribute technical prowess and a passion for emerging
              technologies to a forward-thinking blockchain team
            </p>
          </div>
        </div>

        <ProjectsCarousel />
      </div>
    </TransitionWrapper>
  )
}
