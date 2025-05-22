import { links } from 'helpers/constants'
import { LinkText } from './Text'

export default function SocialLinks() {
  return (
    <div className="absolute right-4 bottom-0 flex items-center gap-x-2 sm:right-8">
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
