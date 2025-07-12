import { atomWithStorage } from 'jotai/utils'

export default atomWithStorage<boolean>('isDoc', false, undefined, {
  getOnInit: true,
})
