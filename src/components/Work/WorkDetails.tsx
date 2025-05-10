import ImageScroll from 'components/ImageScroll'
import { LinkText, SmallHeader } from 'components/Text'
import { Work } from 'helpers/constants'

export default function WorkDetails({
  title,
  description,
  links,
  media,
  company,
}: Work) {
  return (
    <article className="flex flex-col w-full items-center">
      <div className="isolate relative flex w-full justify-center border-b-2">
        <SmallHeader className="top-2 text-center absolute bg-white text-black px-4 rounded-full mix-blend-difference">
          {title}
        </SmallHeader>
        <ImageScroll items={media} />
      </div>
      <div className="flex h-full w-full border-b-2">
        <p className="[writing-mode:sideways-lr] text-center font-light text-xl border-r-2 py-2">
          desc
        </p>
        <div className="rounded-md p-2 max-h-64 overflow-y-scroll whitespace-pre-wrap">
          {description}
        </div>
      </div>

      <footer className="flex w-full items-center justify-around sm:justify-evenly py-1">
        <div className="flex flex-col">
          <LinkText
            href={company?.link}
            className="inline-flex items-center gap-x-1.5"
            external
          >
            {company?.logo}
            {company?.title}
          </LinkText>
        </div>

        <div className="flex items-center gap-x-2">
          <div className="flex flex-col">
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
    </article>
  )
}
