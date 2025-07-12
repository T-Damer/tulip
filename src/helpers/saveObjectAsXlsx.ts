import { PatientsDataStore } from 'atoms/patientsDataStore'
import { saveAs } from 'file-saver'
import { utils, WorkBook, write } from 'xlsx'
import constructCsv from './constructCsv'
import { QuestionaryResult } from './getResult'

const fileExtension = '.xlsx'
export const sheetName = 'data'

function createXlsxBlob(
  data: PatientsDataStore,
  questionaryResult: QuestionaryResult
) {
  const { titles, values } = constructCsv(data, questionaryResult)
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
  questionaryResult: QuestionaryResult
) {
  const { blob } = createXlsxBlob(data, questionaryResult)

  saveAs(blob, fileName + fileExtension, { autoBom: true })
}
