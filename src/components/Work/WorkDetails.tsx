import PhotoSwipe from 'components/PhotoSwipe'
import { LinkText } from 'components/Text'
import { Work } from 'helpers/constants'

export default function WorkDetails({
  title,
  description,
  links,
  media,
  company,
}: Work) {
  return (
    <article className="flex flex-col w-full">
      <PhotoSwipe items={media} />
      <div className="flex flex-3 w-full border-b-2 overflow-auto">
        <span className="writing-sideways-lr text-center font-serif font-light text-xl border-r-2 py-2">
          {title}
        </span>
        <div className="overflow-y-scroll ">
          <p className="p-2 whitespace-pre-wrap">{description}</p>
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
