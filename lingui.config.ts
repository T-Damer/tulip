import { LinguiConfig } from '@lingui/conf'

const config: LinguiConfig = {
  locales: ['en', 'ru', 'uz'],
  sourceLocale: 'ru',
  catalogs: [
    {
      path: '<rootDir>/src/locales/{locale}/messages',
      include: ['src'],
    },
  ],
  format: 'po',
  compileNamespace: 'ts',
}
export default config
