import GalleryLightbox from 'components/GalleryLightbox'
import { LinkText } from 'components/Text'
import { Work } from 'helpers/constants'
import parseUrls from 'helpers/parseUrls'
import { useEffect, useRef, useState } from 'react'

export default function WorkDetails({
  title,
  description,
  links,
  media,
  company,
}: Work) {
  const linksRef = useRef<HTMLDivElement>(null)
  const scrollInterval = useRef<number>(undefined)
  const resumeTimeout = useRef<number>(undefined)
  const [isPaused, setIsPaused] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<1 | -1>(1) // 1 for forward, -1 for backward

  useEffect(() => {
    if (!linksRef.current || links.length <= 1) return

    const scrollStep = 0.5
    const scrollDelay = 20

    const startScrolling = () => {
      scrollInterval.current = setInterval(() => {
        if (!linksRef.current || isPaused) return

        const { scrollLeft, scrollWidth, clientWidth } = linksRef.current
        const maxScroll = scrollWidth - clientWidth

        if (scrollLeft >= maxScroll) {
          setScrollDirection(-1)
        } else if (scrollLeft <= 0) {
          setScrollDirection(1)
        }

        linksRef.current.scrollBy({
          left: scrollStep * scrollDirection,
          behavior: 'auto',
        })
      }, scrollDelay)
    }

    startScrolling()

    return () => {
      clearInterval(scrollInterval.current)
      clearTimeout(resumeTimeout.current)
    }
  }, [links.length, isPaused, scrollDirection])

  const handleInteractStart = () => {
    setIsPaused(true)
    clearInterval(scrollInterval.current)
    clearTimeout(resumeTimeout.current)
  }

  const handleInteractEnd = () => {
    clearTimeout(resumeTimeout.current)
    resumeTimeout.current = setTimeout(() => {
      setIsPaused(false)
    }, 3000)
  }

  return (
    <article className="flex h-full w-full flex-col xl:flex-row-reverse">
      <GalleryLightbox items={media} />
      <div className="flex h-full w-full flex-col overflow-auto">
        <div className="flex h-full w-full flex-3 overflow-auto border-b-2 dark:border-white-pale">
          <span className="writing-sideways-lr border-r-2 py-2 text-center font-light font-serif text-xl dark:border-white-pale">
            {title}
          </span>
          <p className="overflow-y-scroll whitespace-pre-wrap p-2">
            {parseUrls(description)}
          </p>
        </div>

        <footer className="flex w-full items-center whitespace-nowrap sm:justify-evenly">
          <div className="flex w-full min-w-fit flex-1 flex-col items-center border-r-2 p-1 dark:border-white-pale">
            <LinkText
              href={company?.link}
              className="inline-flex items-center gap-x-1.5"
              external
            >
              {company?.logo}
              {company?.title}
            </LinkText>
          </div>

          <div className="flex w-full flex-2 overflow-x-auto">
            <div
              className="flex gap-x-3 overflow-x-scroll px-2"
              ref={linksRef}
              onMouseEnter={handleInteractStart}
              onMouseLeave={handleInteractEnd}
              onTouchStart={handleInteractStart}
              onTouchEnd={handleInteractEnd}
            >
              {links.map(({ altText, href, logo }) => (
                <LinkText
                  href={href}
                  className="inline-flex items-center gap-x-0.5"
                  key={altText + href}
                  external
                >
                  <div className="h-4 w-4">{logo.component}</div>
                  {altText}
                </LinkText>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </article>
  )
}
