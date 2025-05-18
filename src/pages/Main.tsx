import { Tilt } from '@jdion/tilt-react'
import Signature from 'assets/icons/Signature'
import dither from 'assets/img/dither.jpg'
import HrText from 'components/HrText'
import ProjectsCarousel from 'components/ProjectsCarousel'
import TransitionWrapper from 'components/TransitionWrapper'

export default function MainPage() {
  return (
    <TransitionWrapper>
      <div className="flex h-full w-full flex-col items-center justify-center gap-16 overflow-y-scroll p-4 sm:px-44 sm:py-8">
        <div className="mt-32 flex flex-col items-center justify-between gap-8 overflow-auto sm:flex-row xl:mt-0">
          <Tilt className="flex items-center justify-center">
            <div className="relative">
              <img
                src={dither}
                className="w-40 border-16 border-b-80 border-white sm:w-64"
              />
              <Signature className="absolute right-0 bottom-2 -rotate-15" />
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
