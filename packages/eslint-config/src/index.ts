import typescript from '@giveerr/eslint-config-typescript'

import type { ESLint } from 'eslint'

const defaultConfig: ESLint.ConfigData = {
  ...typescript,
  extends: '@giveerr/eslint-config-typescript'
}

export default defaultConfig
