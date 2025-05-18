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
    <article className="flex w-full flex-col xl:flex-row-reverse">
      <PhotoSwipe items={media} />
      <div className="flex w-full flex-col overflow-auto">
        <div className="flex w-full flex-3 overflow-auto border-b-2">
          <span className="writing-sideways-lr border-r-2 py-2 text-center font-serif text-xl font-light">
            {title}
          </span>
          <div className="flex items-center justify-center overflow-y-scroll">
            <p className="p-2 whitespace-pre-wrap">{description}</p>
          </div>
        </div>

        <footer className="flex w-full items-center justify-around py-1 sm:justify-evenly">
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
      </div>
    </article>
  )
}
