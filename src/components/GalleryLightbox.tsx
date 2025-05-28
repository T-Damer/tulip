import 'yet-another-react-lightbox/plugins/counter.css'
import 'yet-another-react-lightbox/styles.css'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Media } from 'helpers/constants'
import { useState } from 'react'
import Lightbox, { SlideImage } from 'yet-another-react-lightbox'
import Counter from 'yet-another-react-lightbox/plugins/counter'
import Video from 'yet-another-react-lightbox/plugins/video'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'

export default function GalleryLightbox({ items }: { items: Media[] }) {
  const [parent] = useAutoAnimate()
  const [index, setIndex] = useState(-1)

  return (
    <div
      className="dark:border-white-pale flex min-h-44 snap-x flex-row overflow-x-scroll border-b-2 will-change-scroll sm:mt-0 xl:h-full xl:w-3/4 xl:snap-y xl:flex-col xl:overflow-y-scroll xl:border-b-0 xl:border-l-2"
      onWheel={(ev) => {
        ev.currentTarget.scrollBy(ev.deltaY, 0)
      }}
      ref={parent}
    >
      <div className="bg-stripes dark:border-white-pale h-full w-11 shrink-0 snap-center xl:h-11 xl:w-full xl:border-b-2" />

      {items.map((item, index) =>
        item.type === 'video' ? (
          <div className="flex h-44 min-w-44 justify-center border-l-2 grayscale-100 transition-[filter] hover:grayscale-0 xl:h-96 xl:border-b-2 xl:border-l-0">
            <video
              controls
              muted
              controlsList="nodownload"
              disableRemotePlayback
              disablePictureInPicture
              onClick={() => setIndex(index)}
              className="h-44 p-1 xl:h-96"
              style={{
                WebkitTransition: '0.3s -webkit-filter ease-in-out',
              }}
              src={item.src}
              title={item.title}
            />
          </div>
        ) : (
          <div
            className="dark:border-white-pale shrink-0 cursor-zoom-in snap-center border-l-2 xl:w-fit xl:border-b-2 xl:border-l-0"
            key={item.src}
          >
            <img
              fetchPriority="high"
              onClick={() => setIndex(index)}
              className="h-44 shrink-0 object-cover grayscale-100 hover:grayscale-0 xl:h-auto"
              style={{
                WebkitTransition: '0.3s -webkit-filter ease-in-out',
              }}
              src={item.src}
              alt={item.title}
            />
          </div>
        )
      )}

      <div className="bg-stripes dark:border-white-pale h-full w-12.5 shrink-0 snap-center border-l-2 xl:h-11 xl:w-full xl:border-l-0" />

      <Lightbox
        slides={items as SlideImage[]}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        plugins={[Zoom, Video, Counter]}
        animation={{ zoom: 2 }}
      />
    </div>
  )
}
