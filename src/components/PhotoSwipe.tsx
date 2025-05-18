import { Media } from 'helpers/constants'
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

export default function PhotoSwipe({ items }: { items: Media[] }) {
  return (
    <div
      className="flex flex-row border-b-2 mt-32 sm:mt-0 w-full overflow-x-scroll snap-x snap-mandatory"
      onWheel={(ev) => {
        ev.currentTarget.scrollBy(ev.deltaY, 0)
      }}
    >
      <div className="shrink-0 snap-center h-full w-11 bg-stripes" />
      <Gallery
        options={{
          closeOnVerticalDrag: true,
          initialZoomLevel: 'fit',
          secondaryZoomLevel: 'fill',
          maxZoomLevel: 'fill',
          doubleTapAction: 'zoom',
          bgClickAction: 'close',
        }}
      >
        {items.map((item) => (
          <div
            className="shrink-0 snap-center border-l-2 cursor-zoom-in"
            key={item.url}
          >
            <Item
              original={item.url}
              thumbnail={item.url}
              height="1040"
              width="1456"
            >
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  className="object-cover shrink-0 h-64 md:h-96 grayscale-100 hover:grayscale-0"
                  style={{
                    WebkitTransition: '0.3s -webkit-filter ease-in-out',
                  }}
                  src={item.url}
                  alt={item.title}
                />
              )}
            </Item>
          </div>
        ))}
      </Gallery>
      <div className="shrink-0 h-full snap-center border-l-2 w-12.5 bg-stripes" />
    </div>
  )
}
