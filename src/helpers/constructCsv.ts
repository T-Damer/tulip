// before converting we need only: title and value, no need for header, keys and stuff
// Store as:
// title1, title2
// value1, value2

import { PatientsDataStore } from 'atoms/patientsDataStore'
import { questions } from 'types/Question'
import { QuestionaryResult } from './getResult'

export default function (
  dataObjToWrite: PatientsDataStore,
  result: QuestionaryResult
) {
  // parse like this:
  const titles: string[] = []
  const values: string[] = []

  dataObjToWrite.forEach((obj) => {
    const question = questions.find((q) => q.id === obj.questionId)
    if (!question) return
    titles.push(question.title)
    values.push(question.answers[obj.answerId])
  })

  titles.push(result.title)
  values.push(String(result.sum))

  return {
    titles,
    values,
    plainString: titles.join('\t') + '\n' + values.join('\t'),
  }
}
