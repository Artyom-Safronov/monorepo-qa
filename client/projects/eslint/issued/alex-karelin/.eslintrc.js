module.exports = {
  extends: ['./.eslintrc.common.js'],
  ignorePatterns: ['.eslintrc.common.js'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['app']
      }
    }
  },
  rules: {
    camelcase: ['off'],
    indent: ['off'],
    semi: ['error', 'never'],
    'max-len': ['warn', 120, {code: 120, comments: 120}],
    'no-unused-vars': ['off'],
    'no-use-before-define': ['warn'],
    'no-restricted-syntax': 0,
    'no-return-assign': ['warn'],
    'no-console': 'error',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-duplicates': ['off'],
    'import/first': ['warn'],
    'flowtype/no-types-missing-file-annotation': 'off',
    'jsx-a11y/no-static-element-interactions': ['warn'],
    'react/prefer-stateless-function': ['warn'],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/default-props-match-prop-types': 'off',
    'react/jsx-filename-extension': [1, {extensions: ['.tsx']}],
    'react/no-did-update-set-state': ['off'],
    '@typescript-eslint/explicit-member-accessibility': ['warn'],
    '@typescript-eslint/no-use-before-define': ['warn'],
    '@typescript-eslint/no-empty-interface': ['warn'],
    '@typescript-eslint/ban-types': ['warn'],
    '@typescript-eslint/no-empty-function': ['off'],
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/indent': ['error', 2, {
      ignoredNodes: ['JSXElement *', 'JSXElement'],
      SwitchCase: 1
    }],
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
        }
      }
    ]
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018
  }
}
