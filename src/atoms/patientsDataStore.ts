import { atomWithStorage } from 'jotai/utils'

type PatientsDataStore = { questionId: number; answerId: number }[]

export default atomWithStorage<PatientsDataStore>(
  'patientsData',
  [],
  undefined,
  {
    getOnInit: true,
  }
)
