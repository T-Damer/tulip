import { Tilt } from '@jdion/tilt-react'
import Signature from 'assets/icons/Signature'
import HrText from 'components/HrText'
import TransitionWrapper from 'components/TransitionWrapper'

const dither = 'img/dither.jpg'

export default function MainPage() {
  return (
    <TransitionWrapper className="overflow-auto">
      <div className="flex h-full flex-col items-center justify-center gap-8 overflow-y-auto p-2 sm:mt-8 md:flex-row xl:mt-0">
        <Tilt className="relative mt-2 flex items-center justify-center xl:m-4">
          <img
            srcSet={`${dither} 933w`}
            width={160}
            height={160}
            sizes="(max-width: 40rem) 10rem, 16rem"
            src={dither}
            alt="Daniil"
            className="w-40 border-16 border-white border-b-80 sm:w-64"
          />
          <Signature className="-rotate-15 absolute right-0 bottom-2" />
        </Tilt>

        <div className="w-full max-w-80 overflow-y-auto">
          <HrText>bio</HrText>
          <p className="overflow-y-scroll">
            Innovative Full Stack Web3 Developer driving impactful blockchain
            solutions. Proficient in crafting dynamic Web3 applications. Adept
            at developing responsive user interfaces and robust backends,
            ensuring seamless functionality across all platforms. Committed to
            leveraging blockchain to create engaging experiences and enhance
            user interaction in decentralized applications. Ready to contribute
            technical prowess and a passion for emerging technologies to a
            forward-thinking blockchain team
          </p>
        </div>
      </div>
    </TransitionWrapper>
  )
}
