import typescriptConfig from '@giveerr/eslint-config-typescript'

import type { ESLint } from 'eslint'

const solidConfig: ESLint.ConfigData = {
  ...typescriptConfig,
  plugins: ['solid'],
  extends: ['plugin:solid/typescript', require.resolve('@giveerr/eslint-config-typescript')],
  parserOptions: {
    ...typescriptConfig.parserOptions,
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',

    'solid/components-return-once': 'error',
    'solid/event-handlers': [
      'error',
      {
        ignoreCase: false,
        warnOnSpread: false
      }
    ],
    'solid/imports': 'error',
    'solid/jsx-no-duplicate-props': 'error',
    'solid/jsx-no-script-url': 'error',
    'solid/jsx-no-undef': [
      'error',
      {
        allowGlobals: true,
        autoImport: true,
        typescriptEnabled: true
      }
    ],
    'solid/jsx-uses-vars': 'error',
    'solid/no-destructure': 'error',
    'solid/no-innerhtml': 'error',
    'solid/no-react-deps': 'error',
    'solid/no-react-specific-props': 'error',
    'solid/no-unknown-namespaces': [
      'error',
      {
        allowedNamespaces: ['data', 'bind']
      }
    ],
    'solid/prefer-classlist': [
      'error',
      {
        classnames: ['cn', 'clsx', 'classnames']
      }
    ],
    'solid/prefer-for': 'error',
    'solid/prefer-show': 'error',
    'solid/reactivity': 'error',
    'solid/self-closing-comp': [
      'error',
      {
        component: 'all',
        html: 'all'
      }
    ],
    'solid/style-prop': 'off',
    'solid/no-proxy-apis': 'warn'
  }
}

export default solidConfig
