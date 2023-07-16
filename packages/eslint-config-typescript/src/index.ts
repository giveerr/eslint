import basic from '@giveerr/eslint-config-basic'

import { Linter } from 'eslint'

import RuleEntry = Linter.RuleEntry

import type { ESLint } from 'eslint'

/**
 * Overridden rules from other plugins or presets.
 */
const overrides: Record<string, RuleEntry> = {
  'dot-notation': 'off',
  'lines-between-class-members': 'off',
  'no-array-constructor': 'off',
  'no-dupe-class-members': 'off',
  'no-duplicate-imports': 'off',
  'no-implied-eval': 'off',
  'no-loss-of-precision': 'off',
  'no-redeclare': 'off',
  'no-restricted-imports': 'off',
  'no-throw-literal': 'off',
  'no-unsafe-finally': 'off',
  'no-unsafe-negation': 'off',
  'no-unused-expressions': 'off',
  'no-unused-vars': 'off',
  'no-use-before-define': 'off',
  'no-useless-constructor': 'off',
  'require-await': 'off',
  'no-return-await': 'off',

  'import/named': 'off',
  'import/namespace': 'off',
  'import/default': 'off',
  'import/no-named-as-default-member': 'off',

  // these rules are for performance boost
  'import/no-cycle': 'off',
  'import/no-unresolved': 'off'
  // 'import/no-named-as-default': 'off',
  // 'import/no-unused-modules': 'off',
  // 'import/no-deprecated': 'off'
}

const rules: Record<string, RuleEntry> = {
  // Disable old rules
  ...overrides,

  '@typescript-eslint/block-spacing': 'off',
  '@typescript-eslint/brace-style': 'off',
  '@typescript-eslint/comma-dangle': 'off',
  '@typescript-eslint/comma-spacing': 'off',
  '@typescript-eslint/func-call-spacing': 'off',
  '@typescript-eslint/indent': 'off',
  '@typescript-eslint/key-spacing': 'off',
  '@typescript-eslint/keyword-spacing': 'off',
  '@typescript-eslint/member-delimiter-style': 'off',
  '@typescript-eslint/no-extra-parens': 'off',
  '@typescript-eslint/no-extra-semi': 'off',
  '@typescript-eslint/object-curly-spacing': 'off',
  '@typescript-eslint/semi': 'off',
  '@typescript-eslint/space-before-blocks': 'off',
  '@typescript-eslint/space-before-function-paren': 'off',
  '@typescript-eslint/space-infix-ops': 'off',
  '@typescript-eslint/type-annotation-spacing': 'off',

  // Extend new rules

  '@typescript-eslint/quotes': basic.rules!.quotes!,
  '@typescript-eslint/dot-notation': basic.rules!['dot-notation']!,
  '@typescript-eslint/no-redeclare': basic.rules!['no-redeclare']!,
  '@typescript-eslint/require-await': basic.rules!['require-await']!,
  '@typescript-eslint/no-unused-vars': basic.rules!['no-unused-vars']!,
  '@typescript-eslint/no-implied-eval': basic.rules!['no-implied-eval']!,
  '@typescript-eslint/no-throw-literal': basic.rules!['no-throw-literal']!,
  '@typescript-eslint/no-loss-of-precision': basic.rules!['no-loss-of-precision']!,
  '@typescript-eslint/no-use-before-define': basic.rules!['no-use-before-define']!,
  '@typescript-eslint/no-array-constructor': basic.rules!['no-array-constructor']!,
  '@typescript-eslint/no-duplicate-imports': basic.rules!['no-duplicate-imports']!,
  '@typescript-eslint/no-dupe-class-members': basic.rules!['no-dupe-class-members']!,
  '@typescript-eslint/no-unused-expressions': basic.rules!['no-unused-expressions']!,
  '@typescript-eslint/no-restricted-imports': basic.rules!['no-restricted-imports']!,
  '@typescript-eslint/no-useless-constructor': basic.rules!['no-useless-constructor']!,
  '@typescript-eslint/lines-between-class-members': basic.rules!['lines-between-class-members']!,
  '@typescript-eslint/return-await': ['error', 'always'],
  '@typescript-eslint/class-literal-property-style': 'off',
  '@typescript-eslint/consistent-indexed-object-style': 'off',
  '@typescript-eslint/consistent-type-assertions': 'off',
  '@typescript-eslint/no-dynamic-delete': 'off',
  '@typescript-eslint/no-extraneous-class': 'off',
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
  '@typescript-eslint/no-require-imports': 'off',
  '@typescript-eslint/no-type-alias': 'off',
  '@typescript-eslint/no-unsafe-call': 'off',
  '@typescript-eslint/no-unsafe-member-access': 'off',
  '@typescript-eslint/prefer-enum-initializers': 'off',
  '@typescript-eslint/prefer-for-of': 'off',
  '@typescript-eslint/prefer-namespace-keyword': 'off',
  '@typescript-eslint/prefer-readonly': 'off',
  '@typescript-eslint/prefer-readonly-parameter-types': 'off',
  '@typescript-eslint/prefer-reduce-type-parameter': 'off',
  '@typescript-eslint/require-array-sort-compare': 'off',
  '@typescript-eslint/strict-boolean-expressions': 'off',
  '@typescript-eslint/triple-slash-reference': 'off',
  '@typescript-eslint/unbound-method': 'off',
  '@typescript-eslint/no-non-null-assertion': 'off',

  '@typescript-eslint/adjacent-overload-signatures': 'error',
  '@typescript-eslint/array-type': [
    'error',
    {
      default: 'array-simple',
      readonly: 'array-simple'
    }
  ],
  '@typescript-eslint/await-thenable': 'error',
  '@typescript-eslint/ban-ts-comment': 'error',
  '@typescript-eslint/ban-tslint-comment': 'error',
  '@typescript-eslint/ban-types': 'error',
  '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
  '@typescript-eslint/consistent-type-exports': ['error', { fixMixedExportsWithInlineTypeSpecifier: true }],
  '@typescript-eslint/consistent-type-imports': 'error',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-member-accessibility': [
    'error',
    {
      accessibility: 'no-public',
      overrides: {
        accessors: 'no-public',
        constructors: 'no-public',
        methods: 'no-public',
        properties: 'no-public',
        parameterProperties: 'explicit'
      }
    }
  ],
  '@typescript-eslint/explicit-module-boundary-types': 'error',
  '@typescript-eslint/member-ordering': [
    'warn',
    {
      default: [
        // Index signature
        'signature',
        'call-signature',

        // Fields
        'public-static-field',
        'protected-static-field',
        'private-static-field',
        '#private-static-field',

        'public-decorated-field',
        'protected-decorated-field',
        'private-decorated-field',

        'public-instance-field',
        'protected-instance-field',
        'private-instance-field',
        '#private-instance-field',

        'public-abstract-field',
        'protected-abstract-field',

        'public-field',
        'protected-field',
        'private-field',
        '#private-field',

        'static-field',
        'instance-field',
        'abstract-field',

        'decorated-field',

        'field',

        // Static initialization
        'static-initialization',

        // Constructors
        'public-constructor',
        'protected-constructor',
        'private-constructor',

        'constructor',

        // Getters
        'public-static-get',
        'protected-static-get',
        'private-static-get',
        '#private-static-get',

        'public-decorated-get',
        'protected-decorated-get',
        'private-decorated-get',

        'public-instance-get',
        'protected-instance-get',
        'private-instance-get',
        '#private-instance-get',

        'public-abstract-get',
        'protected-abstract-get',

        'public-get',
        'protected-get',
        'private-get',
        '#private-get',

        'static-get',
        'instance-get',
        'abstract-get',

        'decorated-get',

        'get',

        // Setters
        'public-static-set',
        'protected-static-set',
        'private-static-set',
        '#private-static-set',

        'public-decorated-set',
        'protected-decorated-set',
        'private-decorated-set',

        'public-instance-set',
        'protected-instance-set',
        'private-instance-set',
        '#private-instance-set',

        'public-abstract-set',
        'protected-abstract-set',

        'public-set',
        'protected-set',
        'private-set',
        '#private-set',

        'static-set',
        'instance-set',
        'abstract-set',

        'decorated-set',

        'set',

        // Methods
        'public-static-method',
        'protected-static-method',
        'private-static-method',
        '#private-static-method',

        'public-decorated-method',
        'protected-decorated-method',
        'private-decorated-method',

        'public-instance-method',
        'protected-instance-method',
        'private-instance-method',
        '#private-instance-method',

        'public-abstract-method',
        'protected-abstract-method',

        'public-method',
        'protected-method',
        'private-method',
        '#private-method',

        'static-method',
        'instance-method',
        'abstract-method',

        'decorated-method',

        'method'
      ]
    }
  ],
  '@typescript-eslint/method-signature-style': ['error', 'property'],
  '@typescript-eslint/no-base-to-string': 'error',
  '@typescript-eslint/no-confusing-non-null-assertion': 'error',
  '@typescript-eslint/no-confusing-void-expression': 'error',
  '@typescript-eslint/no-empty-interface': 'warn',
  '@typescript-eslint/no-explicit-any': [
    'error',
    {
      ignoreRestArgs: true
    }
  ],
  '@typescript-eslint/no-extra-non-null-assertion': 'error',
  '@typescript-eslint/no-floating-promises': 'warn',
  '@typescript-eslint/no-for-in-array': 'warn',
  '@typescript-eslint/no-inferrable-types': 'warn',
  '@typescript-eslint/no-invalid-void-type': 'error',
  '@typescript-eslint/no-meaningless-void-operator': 'error',
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-misused-promises': 'warn',
  '@typescript-eslint/no-namespace': ['warn', { allowDeclarations: true, allowDefinitionFiles: true }],
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
  '@typescript-eslint/no-this-alias': 'warn',
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
  '@typescript-eslint/no-unnecessary-condition': 'error',
  '@typescript-eslint/no-unnecessary-qualifier': 'warn',
  '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',
  '@typescript-eslint/no-unsafe-argument': 'error',
  '@typescript-eslint/no-unsafe-assignment': 'error',
  '@typescript-eslint/no-unsafe-return': 'error',
  '@typescript-eslint/no-var-requires': 'error',
  '@typescript-eslint/non-nullable-type-assertion-style': 'error',
  '@typescript-eslint/prefer-as-const': 'error',
  '@typescript-eslint/prefer-function-type': 'warn',
  '@typescript-eslint/prefer-includes': 'warn',
  '@typescript-eslint/prefer-literal-enum-member': 'warn',
  '@typescript-eslint/prefer-nullish-coalescing': [
    'warn',
    {
      ignoreConditionalTests: false,
      ignoreTernaryTests: false,
      ignoreMixedLogicalExpressions: true
    }
  ],
  '@typescript-eslint/prefer-optional-chain': 'warn',
  '@typescript-eslint/prefer-regexp-exec': 'warn',
  '@typescript-eslint/prefer-return-this-type': 'warn',
  '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
  '@typescript-eslint/prefer-ts-expect-error': 'error',
  '@typescript-eslint/promise-function-async': 'warn',
  '@typescript-eslint/restrict-plus-operands': 'warn',
  '@typescript-eslint/restrict-template-expressions': [
    'warn',
    {
      allowNumber: true,
      allowBoolean: true,
      allowAny: true,
      allowNullish: true,
      allowRegExp: false
    }
  ],
  '@typescript-eslint/sort-type-constituents': 'warn',
  '@typescript-eslint/switch-exhaustiveness-check': 'warn',
  '@typescript-eslint/unified-signatures': 'warn'
}

const typescriptOnlyConfig: Partial<ESLint.ConfigData> = {
  parserOptions: {
    ...basic.parserOptions,
    tsconfigRootDir: process.cwd(),
    project: ['./tsconfig.json', './packages/*/tsconfig.json', './tools/*/tsconfig.json', './apps/*/tsconfig.json'],
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict'
  ],
  settings: {
    jsdoc: {
      mode: 'typescript'
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts']
      },
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

        // use a glob pattern
        project: {
          alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

          project: [
            './tsconfig.json',
            './packages/*/tsconfig.json',
            './tools/*/tsconfig.json',
            './apps/*/tsconfig.json'
          ]
        }
      }
    }
  }
}

const typescriptConfig: ESLint.ConfigData = {
  extends: ['@giveerr/eslint-config-basic'],
  overrides: basic.overrides!.concat([
    {
      ...typescriptOnlyConfig,
      excludedFiles: ['**/*.md/*.*'],
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
      rules
    },
    {
      ...typescriptOnlyConfig,
      files: ['**/__tests__/**/*.ts', '**/*.spec.ts', '**/*.test.ts'],
      plugins: ['jest'],
      rules: {
        ...rules,

        // you should turn the original rule off *only* for test files
        '@typescript-eslint/unbound-method': 'off',
        'jest/unbound-method': 'error'
      }
    }
  ])
}

export default typescriptConfig
