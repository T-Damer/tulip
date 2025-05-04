import HrText from 'components/HrText'
import ImageAccordion from 'components/ImageAccordion'
import { LinkText, SmallHeader } from 'components/Text'
import { Work } from 'helpers/constants'

export default function WorkDetails({
  title,
  dateFrom,
  description,
  iFrameLink,
  links,
  media,
  tags,
  company,
  dateTo,
}: Work) {
  return (
    <article className="flex flex-col w-full items-center p-4">
      <SmallHeader className="text-center w-full">{title}</SmallHeader>
      <div className="flex w-full justify-center">
        <ImageAccordion items={media} />
      </div>
      <div className="h-full sm:w-2/3 w-full">
        <HrText>desc</HrText>
        <div className="rounded-md p-2">{description}</div>
      </div>

      <footer className="flex w-full items-center justify-evenly">
        <div className="flex flex-col">
          <LinkText href={company?.link}>
            <img src={company?.logo} />
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
