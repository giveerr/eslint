import reactConfig from '@giveerr/eslint-config-react'

import type { ESLint } from 'eslint'

const prettierReactConfig: ESLint.ConfigData = {
  extends: [require.resolve('@giveerr/eslint-config-react'), require.resolve('@giveerr/eslint-config-prettier')],
  parserOptions: reactConfig.parserOptions,
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

export default prettierReactConfig
