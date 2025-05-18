import { Media } from 'helpers/constants'
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

export default function PhotoSwipe({ items }: { items: Media[] }) {
  return (
    <div
      className="mt-32 flex h-fit snap-x flex-row overflow-x-scroll border-b-2 sm:mt-0 xl:h-full xl:w-3/4 xl:snap-y xl:flex-col xl:overflow-y-scroll xl:border-b-0 xl:border-l-2"
      onWheel={(ev) => {
        ev.currentTarget.scrollBy(ev.deltaY, 0)
      }}
    >
      <div className="bg-stripes h-full w-11 shrink-0 snap-center xl:h-11 xl:w-full xl:border-b-2" />
      <Gallery
        options={{
          closeOnVerticalDrag: true,
          initialZoomLevel: 'fit',
          secondaryZoomLevel: 'fill',
          maxZoomLevel: 'fill',
          doubleTapAction: 'zoom',
          bgClickAction: 'close',
          wheelToZoom: true,
        }}
      >
        {items.map((item) => (
          <div
            className="shrink-0 cursor-zoom-in snap-center border-l-2 xl:w-fit xl:border-b-2 xl:border-l-0"
            key={item.url}
          >
            <Item
              original={item.url}
              thumbnail={item.url}
              width="1280"
              height="960"
            >
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  className="h-44 shrink-0 object-cover grayscale-100 hover:grayscale-0 xl:h-fit"
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
      <div className="bg-stripes h-full w-12.5 shrink-0 snap-center border-l-2 xl:h-11 xl:w-full xl:border-l-0" />
    </div>
  )
}
