import Logo from 'assets/Logo'
import LanguagePicker from './LanguagePicker'

export default function Header() {
  return (
    <div className="sticky top-0 z-10 mx-4 my-2 flex h-12 max-w-prose items-center justify-between sm:mx-auto">
      <Logo />

      <LanguagePicker />
    </div>
  )
}
