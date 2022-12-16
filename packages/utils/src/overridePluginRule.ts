import { moduleExists } from './moduleExists'

import type { Linter } from 'eslint'

// eslint-disable-next-line max-len
export const overridePluginRule = (
  ruleName: string,
  override: Linter.RuleEntry = 'off'
): Record<string, Linter.RuleEntry> => {
  const [pluginName] = ruleName.split('/')

  if (!moduleExists(`eslint-plugin-${pluginName}`)) {
    return {}
  }

  return {
    [ruleName]: override
  }
}
