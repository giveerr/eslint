import type { ESLint } from 'eslint'

const nodeConfig: ESLint.ConfigData = {
  extends: require.resolve('@giveerr/eslint-config'),
  env: {
    node: true
  }
}

export default nodeConfig
