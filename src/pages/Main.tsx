import ProjectsCarousel from 'components/ProjectsCarousel'
import TransitionWrapper from 'components/TransitionWrapper'

export default function MainPage() {
  return (
    <TransitionWrapper>
      <div className="flex flex-col gap-16 w-full h-full py-8 px-16">
        <div className="flex gap-8 items-center justify-between">
          <img src="" className="w-96 h-96" />
          <div className="w-full">
            <h1>bio</h1>
            <hr />
            <p>About me</p>
          </div>
        </div>

        <ProjectsCarousel />
      </div>
    </TransitionWrapper>
  )
}
