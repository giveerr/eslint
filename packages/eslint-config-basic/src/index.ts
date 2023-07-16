import type { ESLint } from 'eslint'

const defaultConfig: ESLint.ConfigData = {
  reportUnusedDisableDirectives: true,
  extends: [
    'plugin:import/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:yml/standard',
    'plugin:markdown/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['html', 'unicorn', 'no-only-tests', 'n', 'promise'],
  env: {
    es6: true,
    browser: true,
    node: true
  },
  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly'
  },
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] }
    }
  },
  ignorePatterns: [
    '*.min.*',
    '*.d.ts',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'output',
    'out',
    'coverage',
    'public',
    'temp',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    // ignore for in lint-staged
    '*.css',
    '*.png',
    '*.ico',
    '*.toml',
    '*.patch',
    '*.txt',
    '*.crt',
    '*.key',
    'Dockerfile',
    // force include
    '!.github',
    '!.vitepress',
    '!.vscode',
    // force exclude
    '.vitepress/cache'
  ],
  overrides: [
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/array-bracket-newline': 'off',
        'jsonc/array-bracket-spacing': 'off',
        'jsonc/array-element-newline': 'off',
        'jsonc/comma-dangle': 'off',
        'jsonc/comma-style': 'off',
        'jsonc/indent': 'off',
        'jsonc/key-spacing': 'off',
        'jsonc/no-floating-decimal': 'off',
        'jsonc/object-curly-newline': 'off',
        'jsonc/object-curly-spacing': 'off',
        'jsonc/object-property-newline': 'off',
        'jsonc/quote-props': 'off',
        'jsonc/quotes': 'off',
        'jsonc/space-unary-ops': 'off',
        'jsonc/key-name-casing': 'off',
        'jsonc/sort-array-values': [
          'error',
          {
            pathPattern: '^files$', // Hits the files property
            order: { type: 'asc' }
          },
          {
            pathPattern: '^keywords$', // Hits the keywords property
            order: [
              'eslint',
              'eslintplugin',
              'eslint-plugin',
              {
                // Fallback order
                order: { type: 'asc' }
              }
            ]
          }
        ],
        'jsonc/sort-keys': [
          'error',
          'asc',
          {
            caseSensitive: true,
            natural: false,
            minKeys: 2
          }
        ],
        'jsonc/no-irregular-whitespace': [
          'error',
          {
            skipStrings: true,
            skipComments: false,
            skipRegExps: false,
            skipTemplates: false
          }
        ],
        'jsonc/no-octal-escape': 'error'
      }
    },
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
      rules: {
        'spaced-comment': 'off'
      }
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/array-bracket-newline': 'off',
        'jsonc/array-bracket-spacing': 'off',
        'jsonc/array-element-newline': 'off',
        'jsonc/comma-dangle': 'off',
        'jsonc/comma-style': 'off',
        'jsonc/indent': 'off',
        'jsonc/key-spacing': 'off',
        'jsonc/no-floating-decimal': 'off',
        'jsonc/object-curly-newline': 'off',
        'jsonc/object-curly-spacing': 'off',
        'jsonc/object-property-newline': 'off',
        'jsonc/quote-props': 'off',
        'jsonc/quotes': 'off',
        'jsonc/space-unary-ops': 'off',

        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'publisher',
              'name',
              'displayName',
              'type',
              'version',
              'private',
              'packageManager',
              'description',
              'author',
              'license',
              'funding',
              'homepage',
              'repository',
              'bugs',
              'keywords',
              'categories',
              'sideEffects',
              'exports',
              'main',
              'module',
              'unpkg',
              'jsdelivr',
              'types',
              'typesVersions',
              'bin',
              'icon',
              'files',
              'engines',
              'activationEvents',
              'contributes',
              'scripts',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'optionalDependencies',
              'devDependencies',
              'pnpm',
              'overrides',
              'resolutions',
              'husky',
              'simple-git-hooks',
              'lint-staged',
              'eslintConfig'
            ]
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' }
          },
          {
            pathPattern: '^exports.*$',
            order: ['types', 'require', 'import']
          }
        ]
      }
    },
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-duplicates': 'off'
      }
    },
    {
      files: ['*.js', '*.cjs', '*.jsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-require-imports': 'off'
      }
    },
    {
      files: ['*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js'],
      rules: {
        'no-unused-expressions': 'off',
        'no-only-tests/no-only-tests': 'error'
      }
    },
    {
      // Code blocks in markdown file
      files: ['**/*.md/*.*'],
      rules: {
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-require-imports': 'off',
        'import/no-unresolved': 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-restricted-imports': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off'
      }
    }
  ],
  rules: {
    curly: 'off',
    'lines-around-comment': 'off',
    'max-len': 'off',
    'no-confusing-arrow': 'off',
    'no-mixed-operators': 'off',
    'no-tabs': 'off',
    'no-unexpected-multiline': 'off',
    quotes: 'off',
    'array-bracket-newline': 'off',
    'array-element-newline': 'off',
    'array-bracket-spacing': 'off',
    'arrow-parens': 'off',
    'arrow-spacing': 'off',
    'block-spacing': 'off',
    'brace-style': 'off',
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    'comma-style': 'off',
    'computed-property-spacing': 'off',
    'dot-location': 'off',
    'eol-last': 'off',
    'func-call-spacing': 'off',
    'function-call-argument-newline': 'off',
    'function-paren-newline': 'off',
    'generator-star-spacing': 'off',
    'implicit-arrow-linebreak': 'off',
    indent: 'off',
    'jsx-quotes': 'off',
    'key-spacing': 'off',
    'keyword-spacing': 'off',
    'linebreak-style': 'off',
    'multiline-ternary': 'off',
    'newline-per-chained-call': 'off',
    'new-parens': 'off',
    'no-extra-parens': 'off',
    'no-extra-semi': 'off',
    'no-floating-decimal': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'no-multi-spaces': 'off',
    'no-multiple-empty-lines': 'off',
    'no-trailing-spaces': 'off',
    'no-whitespace-before-property': 'off',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': 'off',
    'object-curly-spacing': 'off',
    'object-property-newline': 'off',
    'one-var-declaration-per-line': 'off',
    'operator-linebreak': 'off',
    'padded-blocks': 'off',
    'quote-props': 'off',
    'rest-spread-spacing': 'off',
    semi: 'off',
    'semi-spacing': 'off',
    'semi-style': 'off',
    'space-before-blocks': 'off',
    'space-before-function-paren': 'off',
    'space-in-parens': 'off',
    'space-infix-ops': 'off',
    'space-unary-ops': 'off',
    'switch-colon-spacing': 'off',
    'template-curly-spacing': 'off',
    'template-tag-spacing': 'off',
    'unicode-bom': 'off',
    'wrap-iife': 'off',
    'wrap-regex': 'off',
    'yield-star-spacing': 'off',
    'arrow-body-style': 'off',
    'unicorn/empty-brace-spaces': 'off',
    'unicorn/no-nested-ternary': 'off',
    'unicorn/number-literal-case': 'off',

    'no-var': 'error',
    'object-shorthand': ['error', 'properties'],

    'no-await-in-loop': 'error',
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-restricted-imports': 'off',
    'no-return-await': 'error',
    'prefer-destructuring': [
      'warn',
      {
        VariableDeclarator: {
          array: true,
          object: true
        },
        AssignmentExpression: {
          array: true,
          object: true
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    'prefer-numeric-literals': 'off',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-await': 'off',
    'require-yield': 'warn',

    'accessor-pairs': ['error', { setWithoutGet: true, enforceForClassMembers: true }],
    'array-callback-return': [
      'error',
      {
        allowImplicit: false,
        checkForEach: false
      }
    ],
    camelcase: [
      'error',
      {
        allow: ['^UNSAFE_'],
        properties: 'never',
        ignoreGlobals: true
      }
    ],
    'constructor-super': 'error',
    'default-case-last': 'error',
    'dot-notation': 'error',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    // eslint-disable-next-line unicorn/no-keyword-prefix
    'new-cap': ['error', { newIsCap: true, capIsNew: false, properties: true }],
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-const-assign': 'error',
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-useless-backreference': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-fallthrough': 'error',
    'no-else-return': ['error', { allowElseIf: true }],
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implied-eval': 'error',
    'no-import-assign': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
    'no-lone-blocks': 'error',
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    'no-prototype-builtins': 'error',
    'no-useless-catch': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-redeclare': ['error', { builtinGlobals: false }],
    'no-regex-spaces': 'error',
    'no-return-assign': ['error', 'except-parens'],
    'no-self-assign': ['error', { props: true }],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],
    'no-unused-vars': [
      'error',
      {
        args: 'none',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
        vars: 'all'
      }
    ],
    'no-use-before-define': ['error', { functions: false, classes: false, variables: false }],
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-void': ['error', { allowAsStatement: true }],
    'no-with': 'error',
    'one-var': ['error', { initialized: 'never' }],
    'prefer-const': ['error', { destructuring: 'all' }],
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['*package', '!', '/', ',', '=']
        },
        block: {
          balanced: true,
          markers: ['*package', '!', ',', ':', '::', 'flow-include'],
          exceptions: ['*']
        }
      }
    ],
    'symbol-description': 'error',
    'use-isnan': [
      'error',
      {
        enforceForSwitchCase: true,
        enforceForIndexOf: true
      }
    ],
    'valid-typeof': ['error', { requireStringLiterals: true }],
    yoda: ['error', 'never'],

    'import/export': 'error',
    'import/first': 'error',
    'import/no-absolute-path': ['error', { esmodule: true, commonjs: true, amd: false }],
    'import/no-duplicates': 'error',
    'import/no-named-default': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/order': [
      'error',
      {
        groups: ['index', 'sibling', 'parent', 'internal', 'external', 'builtin', 'object', 'type'],
        'newlines-between': 'always-and-inside-groups',
        warnOnUnassignedImports: false,
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],

    'unicorn/custom-error-definition': 'error',
    'unicorn/no-keyword-prefix': 'error',
    'unicorn/prefer-json-parse-buffer': 'error',

    'n/handle-callback-err': ['error', '^(err|error)$'],
    'n/no-callback-literal': 'error',
    'n/no-deprecated-api': 'error',
    'n/no-exports-assign': 'error',
    'n/no-new-require': 'error',
    'n/no-path-concat': 'error',
    'n/process-exit-as-throw': 'error',

    'promise/param-names': 'error',

    'yml/quotes': ['error', { prefer: 'single', avoidEscape: false }],
    'yml/no-empty-document': 'off'
  }
}

export default defaultConfig
