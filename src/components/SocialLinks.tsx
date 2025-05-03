import { links } from 'helpers/constants'
import { LinkText } from './Text'

export default function SocialLinks() {
  return (
    <div className="absolute bottom-0 right-4 sm:right-8 flex gap-x-2 items-center">
      <LinkText href={links.github} external>
        GitHub
      </LinkText>
      <LinkText href={links.linkedIn} external>
        LinkedIn
      </LinkText>
      <LinkText href={links.cv}>CV</LinkText>
    </div>
  )
}
