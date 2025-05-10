import { Media } from 'helpers/constants'
import Zoom from 'react-medium-image-zoom'

export default function ImageScroll({ items }: { items: Media[] }) {
  return (
    <div className="flex h-80 md:h-96 justify-center items-center w-full overflow-x-scroll snap-x snap-mandatory">
      <div className="shrink-0 snap-center border-l-2 h-full w-247.5 md:w-145 bg-stripes" />
      {items.map((item) => (
        <div className="shrink-0">
          <Zoom>
            <img
              className="object-cover shrink-0 align-center h-80 md:h-96 snap-center border-l-2 cursor-zoom-in"
              src={item?.url}
              alt={item?.title}
              key={item.url}
            />
          </Zoom>
        </div>
      ))}
      <div className="shrink-0 h-full snap-center border-l-2 w-36 bg-stripes" />
    </div>
  )
}
