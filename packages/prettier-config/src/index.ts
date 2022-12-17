import type { Options } from 'prettier'

const prettierConfig: Options = {
  printWidth: 120,
  singleQuote: true,
  useTabs: false,
  tabWidth: 2,
  semi: false,
  trailingComma: 'none',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: false
}

export default prettierConfig
