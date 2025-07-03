export default interface Question {
  title: string
  description: string
  answers: Record<number, string>
}
