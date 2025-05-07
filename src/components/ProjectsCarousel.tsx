import { myWorks } from 'helpers/constants'
import ImageAccordion from './ImageAccordion'

export default function ProjectsCarousel() {
  const media = myWorks.map((work) => ({
    url: work.hoverImage,
  }))

  return <ImageAccordion items={media} />
}
