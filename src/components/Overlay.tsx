import bgFlowers from 'assets/img/bgFlowers.png'
import { LinkText } from './Text'

export default function Overlay() {
  return (
    <>
      <div className="bg-noise" />
      <img
        src={bgFlowers}
        className="windy-animation left-o pointer-events-none absolute bottom-0 opacity-10 select-none"
      />
      <div className="absolute bottom-0 left-2 sm:top-1.5 sm:right-8 sm:bottom-auto sm:left-auto">
        <LinkText href="mailto:dpancov64@gmail.com" external>
          dpancov64@gmail.com
        </LinkText>
      </div>
    </>
  )
}
