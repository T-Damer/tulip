import { Media } from 'helpers/constants'
import Zoom from 'react-medium-image-zoom'

export default function ImageScroll({ items }: { items: Media[] }) {
  return (
    <div
      className="flex w-full snap-x snap-mandatory flex-row overflow-x-scroll border-b-2 sm:mt-0"
      onWheel={(ev) => {
        ev.currentTarget.scrollBy(ev.deltaY, 0)
      }}
    >
      <div className="bg-stripes h-full w-11 shrink-0 snap-center" />
      {items.map((item) => (
        <div className="shrink-0 snap-center border-l-2">
          <Zoom>
            <img
              className="h-64 shrink-0 object-cover grayscale-100 hover:grayscale-0 md:h-96"
              style={{ WebkitTransition: '0.3s -webkit-filter ease-in-out' }}
              src={item?.url}
              alt={item?.title}
              key={item.url}
            />
          </Zoom>
        </div>
      ))}
      <div className="bg-stripes h-full w-12.5 shrink-0 snap-center border-l-2" />
    </div>
  )
}
