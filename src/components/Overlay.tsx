import bgFlowers from 'assets/img/bgFlowers.png'
import { LinkText } from './Text'

export default function Overlay() {
  return (
    <>
      <div className="bg-noise" />
      <img
        src={bgFlowers}
        className="windy-animation pointer-events-none absolute bottom-0 left-0 z-10 opacity-10 select-none md:left-40"
      />
      <div className="absolute bottom-0 left-2 sm:top-1.5 sm:right-8 sm:bottom-auto sm:left-auto">
        <LinkText href="mailto:dpancov64@gmail.com" external>
          dpancov64@gmail.com
        </LinkText>
      </div>
    </>
  )
}
