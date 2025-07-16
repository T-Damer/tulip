import { JSX } from 'react'

export interface Question {
  id: number
  title: string
  description: string
  docDescription?: string
  extraElement?: JSX.Element
  hint?: string
  answers: Record<number, string>
}
