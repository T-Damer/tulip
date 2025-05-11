import { Media } from 'helpers/constants'
import Zoom from 'react-medium-image-zoom'

export default function ImageScroll({ items }: { items: Media[] }) {
  return (
    <div
      className="flex flex-row h-64 md:h-96 items-center w-full overflow-x-scroll snap-x snap-mandatory"
      onWheel={(ev) => {
        ev.currentTarget.scrollBy(ev.deltaY, 0)
      }}
    >
      <div className="shrink-0 snap-center h-full w-11 bg-stripes" />
      {items.map((item) => (
        <div className="shrink-0 snap-center border-l-2">
          <Zoom>
            <img
              className="object-cover shrink-0 h-64 md:h-96"
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
