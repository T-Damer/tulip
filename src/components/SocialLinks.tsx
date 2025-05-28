import { links } from 'helpers/constants'
import hapticImpact from 'helpers/hapticImpact'
import { LinkText } from './Text'

export default function SocialLinks() {
  return (
    <div className="absolute right-4 bottom-0 flex items-center gap-x-2 sm:right-8">
      <LinkText href={links.github} external onClick={hapticImpact}>
        GitHub
      </LinkText>
      <LinkText href={links.linkedIn} external onClick={hapticImpact}>
        LinkedIn
      </LinkText>
      <LinkText href={links.cv} external onClick={hapticImpact}>
        CV
      </LinkText>
    </div>
  )
}
