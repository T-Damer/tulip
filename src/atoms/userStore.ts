import { atomWithStorage } from 'jotai/utils'

export type Languages = 'en' | 'ru' | 'uz'

export default atomWithStorage<{ language: Languages }>(
  'userStore',
  { language: 'ru' },
  undefined,
  {
    getOnInit: true,
  }
)
