import solidConfig from '@giveerr/eslint-config-solid'

import type { ESLint } from 'eslint'

const prettierSolidConfig: ESLint.ConfigData = {
  extends: [require.resolve('@giveerr/eslint-config-solid'), require.resolve('@giveerr/eslint-config-prettier')],
  parserOptions: solidConfig.parserOptions,
  rules: {
    'prettier/prettier': [
      'error',
      {
        ...require('@giveerr/prettier-config'),

        parser: 'typescript'
      }
    ]
  }
}

export default prettierSolidConfig
