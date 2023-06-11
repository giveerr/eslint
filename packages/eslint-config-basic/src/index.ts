import type { ESLint } from 'eslint'

const defaultConfig: ESLint.ConfigData = {
  reportUnusedDisableDirectives: true,
  extends: [
    'plugin:import/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:yml/standard',
    'plugin:markdown/recommended'
  ],
  plugins: [
    'html',
    'unicorn',
    'no-only-tests',
    'unused-imports',
    'n',
    'promise'
  ],
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
      files: [
        '*.json',
        '*.json5',
        '*.jsonc'
      ],
      parser: 'jsonc-eslint-parser',
      rules: {
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
        'jsonc/array-bracket-newline': [
          'error',
          {
            multiline: true,
            minItems: null
          }
        ],
        'jsonc/array-bracket-spacing': ['error', 'never'],
        'jsonc/array-element-newline': 'off',
        'jsonc/comma-dangle': ['error', 'never'],
        'jsonc/comma-style': ['error', 'last'],
        'jsonc/indent': ['error', 2],
        'jsonc/key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
        'jsonc/no-irregular-whitespace': [
          'error',
          {
            skipStrings: true,
            skipComments: false,
            skipRegExps: false,
            skipTemplates: false
          }
        ],
        'jsonc/no-octal-escape': 'error',
        'jsonc/object-curly-newline': ['error', { multiline: true, consistent: true }],
        'jsonc/object-curly-spacing': ['error', 'always'],
        'jsonc/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }]
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
            order: [
              'types',
              'require',
              'import'
            ]
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
      files: [
        '*.js',
        '*.cjs',
        '*.jsx'
      ],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-require-imports': 'off'
      }
    },
    {
      files: [
        '*.test.ts',
        '*.test.js',
        '*.spec.ts',
        '*.spec.js'
      ],
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
        'unused-imports/no-unused-imports': 'off',
        'unused-imports/no-unused-vars': 'off',
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
    'no-var': 'error',
    'object-shorthand': ['error', 'properties'],

    'arrow-parens': ['error', 'as-needed'],
    'arrow-body-style': 'error',
    'no-await-in-loop': 'error',
    'no-confusing-arrow': ['error', { allowParens: true, onlyOneSimpleParam: true }],
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
    'array-bracket-spacing': ['error', 'never'],
    'array-callback-return': [
      'error',
      {
        allowImplicit: false,
        checkForEach: false
      }
    ],
    'arrow-spacing': ['error', { before: true, after: true }],
    'block-spacing': ['error', 'always'],
    'brace-style': [
      'error',
      '1tbs',
      { allowSingleLine: true }
    ],
    camelcase: [
      'error',
      {
        allow: ['^UNSAFE_'],
        properties: 'never',
        ignoreGlobals: true
      }
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': [
      'error',
      'never',
      { enforceForClassMembers: true }
    ],
    'constructor-super': 'error',
    curly: ['error', 'multi-line'],
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        beforeLineComment: true,
        allowBlockStart: true,
        allowBlockEnd: true,
        allowClassStart: true,
        allowClassEnd: true,
        allowObjectStart: true,
        allowObjectEnd: true,
        allowArrayStart: true,
        allowArrayEnd: true
      }
    ],
    'array-bracket-newline': ['error', { multiline: true, minItems: 3 }],
    'max-len': 'off',
    'array-element-newline': ['error', { multiline: true, minItems: 3 }],
    'function-call-argument-newline': ['error', 'consistent'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'default-case-last': 'error',
    'jsx-quotes': ['error', 'prefer-double'],
    'linebreak-style': ['error', 'unix'],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],
    'no-extra-semi': 'error',
    'nonblock-statement-body-position': ['error', 'beside'],
    'one-var-declaration-per-line': 'off',
    'semi-style': ['error', 'last'],
    'switch-colon-spacing': ['error', { after: true, before: false }],
    'wrap-regex': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eol-last': 'error',
    eqeqeq: [
      'error',
      'always',
      { null: 'ignore' }
    ],
    'func-call-spacing': ['error', 'never'],
    'generator-star-spacing': ['error', { before: true, after: false }],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: { parameters: 1, body: 1 },
        FunctionExpression: { parameters: 1, body: 1 },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
        ignoredNodes: [
          'TemplateLiteral *',
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXFragment',
          'JSXOpeningFragment',
          'JSXClosingFragment',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild'
        ],
        offsetTernaryExpressions: true
      }
    ],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'keyword-spacing': ['error', { before: true, after: true }],
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true }
    ],
    'multiline-ternary': ['error', 'always-multiline'],
    // eslint-disable-next-line unicorn/no-keyword-prefix
    'new-cap': ['error', { newIsCap: true, capIsNew: false, properties: true }],
    'new-parens': 'error',
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
    'no-extra-parens': ['error', 'functions'],
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
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
    'no-mixed-operators': [
      'error',
      {
        groups: [
          [
            '==',
            '!=',
            '===',
            '!==',
            '>',
            '>=',
            '<',
            '<='
          ],
          ['&&', '||'],
          ['in', 'instanceof']
        ],
        allowSamePrecedence: true
      }
    ],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
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
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-unexpected-multiline': 'error',
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
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
    'one-var': ['error', { initialized: 'never' }],
    'operator-linebreak': [
      'error',
      'after',
      { overrides: { '?': 'before', ':': 'before', '|>': 'before' } }
    ],
    'padded-blocks': ['error', { blocks: 'never', switches: 'never', classes: 'never' }],
    'prefer-const': ['error', { destructuring: 'all' }],
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
    'quote-props': ['error', 'as-needed'],
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false }
    ],
    'rest-spread-spacing': ['error', 'never'],
    semi: ['error', 'never'],
    'semi-spacing': ['error', { before: false, after: true }],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: [
            '*package',
            '!',
            '/',
            ',',
            '='
          ]
        },
        block: {
          balanced: true,
          markers: [
            '*package',
            '!',
            ',',
            ':',
            '::',
            'flow-include'
          ],
          exceptions: ['*']
        }
      }
    ],
    'symbol-description': 'error',
    'template-curly-spacing': ['error', 'never'],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'use-isnan': [
      'error',
      {
        enforceForSwitchCase: true,
        enforceForIndexOf: true
      }
    ],
    'valid-typeof': ['error', { requireStringLiterals: true }],
    'wrap-iife': [
      'error',
      'any',
      { functionPrototypeMethods: true }
    ],
    'yield-star-spacing': ['error', 'both'],
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
        groups: [
          'index',
          'sibling',
          'parent',
          'internal',
          'external',
          'builtin',
          'object',
          'type'
        ],
        'newlines-between': 'always-and-inside-groups',
        warnOnUnassignedImports: false,
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],

    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': ['warn', { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }],

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
