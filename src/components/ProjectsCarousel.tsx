import { myWorks } from 'helpers/constants'
import ImageScroll from './ImageScroll'

export default function ProjectsCarousel() {
  const media = myWorks.map((work) => ({
    url: work.hoverImage,
  }))

  return (
    <div className="hidden h-32">
      <ImageScroll items={media} />
    </div>
  )
}
