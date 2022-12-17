import defaultConfig from '@giveerr/eslint-config'

import type { ESLint } from 'eslint'

const prettierJavascriptConfig: ESLint.ConfigData = {
  extends: [require.resolve('@giveerr/eslint-config'), require.resolve('@giveerr/eslint-config-prettier')],
  parserOptions: defaultConfig.parserOptions,
  rules: {
    'prettier/prettier': [
      'error',
      {
        ...require('@giveerr/prettier-config'),

        parser: 'babel'
      }
    ]
  }
}

export default prettierJavascriptConfig
