export interface Question {
  id: number
  title: string
  description: string
  hint?: string
  answers: Record<number, string>
}
