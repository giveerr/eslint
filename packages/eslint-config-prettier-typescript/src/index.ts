import typescriptConfig from '@giveerr/eslint-config-typescript'

import type { ESLint } from 'eslint'

const prettierTypescriptConfig: ESLint.ConfigData = {
  extends: [require.resolve('@giveerr/eslint-config-typescript'), require.resolve('@giveerr/eslint-config-prettier')],
  parserOptions: typescriptConfig.parserOptions,
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

export default prettierTypescriptConfig
