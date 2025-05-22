import { Tilt } from '@jdion/tilt-react'
import Signature from 'assets/icons/Signature'
import dither from 'assets/img/dither.jpg'
import HrText from 'components/HrText'
import ProjectsCarousel from 'components/ProjectsCarousel'
import TransitionWrapper from 'components/TransitionWrapper'

export default function MainPage() {
  return (
    <TransitionWrapper>
      <div className="flex h-full w-full flex-col items-center justify-center gap-16 overflow-y-auto pb-4 md:py-8">
        <div className="flex flex-col items-center justify-between gap-8 overflow-y-auto p-2 sm:mt-8 md:flex-row xl:mt-0">
          <Tilt className="relative mt-2 flex items-center justify-center xl:m-4">
            <img
              title="Daniil"
              alt="Daniil"
              src={dither}
              className="w-40 border-16 border-b-80 border-white sm:w-64"
            />
            <Signature className="absolute right-0 bottom-2 -rotate-15" />
          </Tilt>

          <div className="w-full max-w-80 overflow-y-auto">
            <HrText>bio</HrText>
            <p className="overflow-y-scroll">
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
