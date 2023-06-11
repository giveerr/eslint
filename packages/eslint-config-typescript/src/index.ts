import basic from '@giveerr/eslint-config-basic'

import { Linter } from 'eslint'

import fs from 'node:fs'
import path from 'node:path'

import RuleEntry = Linter.RuleEntry

import type { ESLint } from 'eslint'

const tsconfig = process.env.ESLINT_TSCONFIG ?? 'tsconfig.json'

/**
 * Overridden rules from other plugins or presets.
 */
const overrides: Record<string, RuleEntry> = {
  'brace-style': 'off',
  'comma-dangle': 'off',
  'comma-spacing': 'off',
  'dot-notation': 'off',
  'func-call-spacing': 'off',
  indent: 'off',
  'keyword-spacing': 'off',
  'lines-between-class-members': 'off',
  'no-array-constructor': 'off',
  'no-dupe-class-members': 'off',
  'no-duplicate-imports': 'off',
  'no-extra-parens': 'off',
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
  'object-curly-spacing': 'off',
  quotes: 'off',
  'require-await': 'off',
  'no-return-await': 'off',
  semi: 'off',
  'space-before-function-paren': 'off',
  'space-infix-ops': 'off',
  'block-spacing': 'off',
  'key-spacing': 'off',
  'lines-around-comment': 0,
  'no-extra-semi': 'off',
  'space-before-blocks': 'off'
}

const rules: Record<string, RuleEntry> = {
  // Disable old rules
  ...overrides,

  // Extend new rules

  '@typescript-eslint/semi': basic.rules!.semi!,
  '@typescript-eslint/quotes': basic.rules!.quotes!,
  '@typescript-eslint/indent': basic.rules!.indent!,
  '@typescript-eslint/brace-style': basic.rules!['brace-style']!,
  '@typescript-eslint/comma-dangle': basic.rules!['comma-dangle']!,
  '@typescript-eslint/dot-notation': basic.rules!['dot-notation']!,
  '@typescript-eslint/no-redeclare': basic.rules!['no-redeclare']!,
  '@typescript-eslint/comma-spacing': basic.rules!['comma-spacing']!,
  '@typescript-eslint/require-await': basic.rules!['require-await']!,
  '@typescript-eslint/no-unused-vars': basic.rules!['no-unused-vars']!,
  '@typescript-eslint/keyword-spacing': basic.rules!['keyword-spacing']!,
  '@typescript-eslint/space-infix-ops': basic.rules!['space-infix-ops']!,
  '@typescript-eslint/no-extra-parens': basic.rules!['no-extra-parens']!,
  '@typescript-eslint/no-implied-eval': basic.rules!['no-implied-eval']!,
  '@typescript-eslint/no-throw-literal': basic.rules!['no-throw-literal']!,
  '@typescript-eslint/func-call-spacing': basic.rules!['func-call-spacing']!,
  '@typescript-eslint/no-loss-of-precision': basic.rules!['no-loss-of-precision']!,
  '@typescript-eslint/object-curly-spacing': basic.rules!['object-curly-spacing']!,
  '@typescript-eslint/no-use-before-define': basic.rules!['no-use-before-define']!,
  '@typescript-eslint/no-array-constructor': basic.rules!['no-array-constructor']!,
  '@typescript-eslint/no-duplicate-imports': basic.rules!['no-duplicate-imports']!,
  '@typescript-eslint/no-dupe-class-members': basic.rules!['no-dupe-class-members']!,
  '@typescript-eslint/no-unused-expressions': basic.rules!['no-unused-expressions']!,
  '@typescript-eslint/no-restricted-imports': basic.rules!['no-restricted-imports']!,
  '@typescript-eslint/no-useless-constructor': basic.rules!['no-useless-constructor']!,
  '@typescript-eslint/space-before-function-paren': basic.rules!['space-before-function-paren']!,
  '@typescript-eslint/lines-between-class-members': basic.rules!['lines-between-class-members']!,
  '@typescript-eslint/block-spacing': basic.rules!['block-spacing']!,
  '@typescript-eslint/key-spacing': basic.rules!['key-spacing']!,
  '@typescript-eslint/lines-around-comment': ['error'],
  '@typescript-eslint/no-extra-semi': basic.rules!['no-extra-semi']!,
  '@typescript-eslint/space-before-blocks': basic.rules!['space-before-blocks']!,
  '@typescript-eslint/type-annotation-spacing': [
    'error',
    {
      before: false,
      after: true,
      overrides: {
        colon: {
          before: false,
          after: true
        },
        arrow: {
          before: true,
          after: true
        }
      }
    }
  ],
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
  '@typescript-eslint/unified-signatures': 'warn',
  '@typescript-eslint/member-delimiter-style': [
    'error',
    {
      multiline: {
        delimiter: 'none',
        requireLast: false
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false
      },
      multilineDetection: 'brackets'
    }
  ]
}

const typescriptConfig: ESLint.ConfigData = {
  ...basic,

  extends: [
    require.resolve('@giveerr/eslint-config-basic'),
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
        extensions: [
          '.js',
          '.jsx',
          '.mjs',
          '.ts',
          '.tsx',
          '.d.ts'
        ]
      },
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

        // use a glob pattern
        project: fs.existsSync(path.join(process.cwd(), tsconfig))
          ? ['**/tsconfig.json', path.join(process.cwd(), tsconfig)]
          : ['**/tsconfig.json']
      }
    }
  },
  overrides: basic.overrides!.concat(
    !fs.existsSync(path.join(process.cwd(), tsconfig))
      ? []
      : [
          {
            parserOptions: {
              tsconfigRootDir: process.cwd(),
              project: [tsconfig],
              sourceType: 'module',
              allowImportExportEverywhere: true
            },
            parser: '@typescript-eslint/parser',
            excludedFiles: ['**/*.md/*.*'],
            files: [
              '*.ts',
              '*.tsx',
              '*.mts',
              '*.cts'
            ],
            rules
          },
          {
            files: [
              '**/__tests__/**/*.ts',
              '**/*.spec.ts',
              '**/*.test.ts'
            ],
            plugins: ['jest'],
            rules: {
              ...rules,

              // you should turn the original rule off *only* for test files
              '@typescript-eslint/unbound-method': 'off',
              'jest/unbound-method': 'error'
            }
          }
        ]
  )
}

export default typescriptConfig
