import typescriptConfig from '@giveerr/eslint-config-typescript'

import type { ESLint } from 'eslint'

const reactConfig: ESLint.ConfigData = {
  ...typescriptConfig,
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/strict',
    require.resolve('@giveerr/eslint-config-typescript')
  ],
  parserOptions: {
    ...typescriptConfig.parserOptions,
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/display-name': 'off',
    'react/forbid-component-props': 'off',
    'react/forbid-dom-props': 'off',
    'react/forbid-elements': 'off',
    'react/forbid-foreign-prop-types': 'off',
    'react/forbid-prop-types': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-fragments': 'off',
    'react/jsx-handler-names': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'react/jsx-no-leaked-render': 'off',
    'react/jsx-no-literals': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-uses-react': 'off',
    'react/no-did-mount-set-state': 'off',
    'react/no-did-update-set-state': 'off',
    'react/no-set-state': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/static-property-placement': 'off',

    'react/boolean-prop-naming': 'error',
    'react/button-has-type': 'error',
    'react/default-props-match-prop-types': 'error',
    'react/destructuring-assignment': ['error', 'always'],
    'react/hook-use-state': 'off',
    'react/iframe-missing-sandbox': 'error',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-child-element-spacing': 'warn',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': ['error', 'always'],
    'react/jsx-curly-newline': [
      'error',
      {
        multiline: 'consistent',
        singleline: 'consistent'
      }
    ],
    'react/jsx-curly-spacing': ['error', 'always'],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-indent': [
      'error',
      2,
      {
        checkAttributes: false,
        indentLogicalExpressions: true
      }
    ],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-key': [
      'error',
      {
        checkFragmentShorthand: true,
        warnOnDuplicates: true
      }
    ],
    'react/jsx-max-depth': ['error', { max: 5 }],
    'react/jsx-max-props-per-line': 'error',
    'react/jsx-newline': ['error', { prevent: true, allowMultilines: true }],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-no-useless-fragment': [
      'error',
      {
        allowExpressions: true
      }
    ],
    'react/jsx-one-expression-per-line': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        multiline: 'first',
        ignoreCase: false,
        noSortAlphabetically: false
      }
    ],
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'allow'
      }
    ],
    'react/jsx-uses-vars': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'error',
    'react/no-arrow-function-lifecycle': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-invalid-html-attribute': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'warn',
    'react/no-namespace': 'warn',
    'react/no-object-type-as-default-prop': 'warn',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'warn',
    'react/no-unsafe': 'error',
    'react/no-unstable-nested-components': 'error',
    'react/no-unused-class-component-methods': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/no-unused-state': 'warn',
    'react/no-will-update-set-state': 'warn',
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-exact-props': 'warn',
    'react/prefer-read-only-props': 'error',
    'react/prefer-stateless-function': 'warn',
    'react/prop-types': 'error',
    'react/require-default-props': 'warn',
    'react/require-optimization': 'warn',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': [
      'error',
      {
        order: ['static-methods', 'lifecycle', 'everything-else', 'render'],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'state',
            'getInitialState',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount'
          ]
        }
      }
    ],
    'react/sort-default-props': [
      'error',
      {
        ignoreCase: false
      }
    ],
    'react/sort-prop-types': [
      'error',
      {
        ignoreCase: false,
        callbacksLast: true,
        requiredFirst: true,
        sortShapeProp: true,
        noSortAlphabetically: true
      }
    ],
    'react/state-in-constructor': ['error', 'never'],
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'ignore',
        logical: 'ignore',
        prop: 'ignore'
      }
    ],
    'react/jsx-no-bind': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
}

export default reactConfig
