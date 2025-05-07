import { LinkText } from './Text'

export default function Overlay() {
  return (
    <>
      <div className="bg-noise" />
      <img
        src="/img/bg-flowers.png"
        className="windy-animation absolute bottom-0 left-o opacity-10 pointer-events-none select-none"
      />
      <div className="absolute bottom-0 left-2 sm:bottom-auto sm:left-auto sm:top-1.5 sm:right-8">
        <LinkText href="mailto:dpancov64@gmail.com" external>
          dpancov64@gmail.com
        </LinkText>
      </div>
    </>
  )
}
