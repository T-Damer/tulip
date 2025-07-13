import { PatientsDataStore } from 'atoms/patientsDataStore'
import { saveAs } from 'file-saver'
import constructCsv from 'helpers/constructCsv'
import { Question } from 'types/Question'
import { utils, WorkBook, write } from 'xlsx'
import { QuestionaryResult } from './hooks/useResult'

const fileExtension = '.xlsx'
export const sheetName = 'data'

function createXlsxBlob(
  data: PatientsDataStore,
  questionaryResult: QuestionaryResult,
  questions: Question[]
) {
  const { titles, values } = constructCsv(data, questionaryResult, questions)
  const workSheet = utils.aoa_to_sheet([titles, values])
  const workBook: WorkBook = {
    Sheets: { data: workSheet },
    SheetNames: [sheetName],
  }
  const excelBuffer = write(workBook, { bookType: 'xlsx', type: 'array' })
  return { blob: new Blob([excelBuffer]) }
}

export default function (
  fileName: string,
  data: PatientsDataStore,
  questionaryResult: QuestionaryResult,
  questions: Question[]
) {
  const { blob } = createXlsxBlob(data, questionaryResult, questions)

  saveAs(blob, fileName + fileExtension, { autoBom: true })
}
