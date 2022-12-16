import type { ESLint } from 'eslint'

const prettierConfig: ESLint.ConfigData = {
  plugins: ['prettier'],
  extends: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error', require('@giveerr/prettier-config')],

    // Disable rules that are unnecessary or conflict with Prettier.
    'array-bracket-newline': 'off',
    'array-element-newline': 'off',
    'function-call-argument-newline': 'off',
    'function-paren-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': 'off',
    'no-extra-parens': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'no-multi-spaces': 'off',
    'no-multiple-empty-lines': 'off',
    'no-tabs': 'off',
    'no-trailing-spaces': 'off',
    'no-whitespace-before-property': 'off',
    'object-curly-newline': 'off',
    'object-property-newline': 'off',
    'operator-linebreak': 'off',
    quotes: 'off',
    semi: 'off',
    'space-before-blocks': 'off',
    'space-before-function-paren': 'off',
    'space-in-parens': 'off',
    'space-infix-ops': 'off',
    'space-unary-ops': 'off'
  }
}

export default prettierConfig
