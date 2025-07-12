import { atomWithStorage } from 'jotai/utils'

export type PatientsDataStore = { questionId: number; answerId: number }[]

export default atomWithStorage<PatientsDataStore>(
  'patientsData',
  [],
  undefined,
  {
    getOnInit: true,
  }
)
