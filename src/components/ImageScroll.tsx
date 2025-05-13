import { Media } from 'helpers/constants'
import Zoom from 'react-medium-image-zoom'

export default function ImageScroll({ items }: { items: Media[] }) {
  return (
    <div
      className="flex flex-row border-b-2 mt-32 sm:mt-0 w-full overflow-x-scroll snap-x snap-mandatory"
      onWheel={(ev) => {
        ev.currentTarget.scrollBy(ev.deltaY, 0)
      }}
    >
      <div className="shrink-0 snap-center h-full w-11 bg-stripes" />
      {items.map((item) => (
        <div className="shrink-0 snap-center border-l-2">
          <Zoom>
            <img
              className="object-cover shrink-0 h-64 md:h-96 grayscale-100 hover:grayscale-0"
              style={{ WebkitTransition: '0.3s -webkit-filter ease-in-out' }}
              src={item?.url}
              alt={item?.title}
              key={item.url}
            />
          </Zoom>
        </div>
      ))}
      <div className="shrink-0 h-full snap-center border-l-2 w-12.5 bg-stripes" />
    </div>
  )
}
