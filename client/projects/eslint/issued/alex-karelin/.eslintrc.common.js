const path = require('path');

module.exports = {
    'extends': [
        'airbnb',
        'plugin:@typescript-eslint/recommended',
    ],
    'parser': '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    'plugins': [
        'react',
        '@typescript-eslint',
        'import',
        'notice',
    ],
    'env': {
        'browser': true,
        'node': true,
        'jest': true,
    },
    'globals': {
        'DEBUG': false,
        'TEST': false,
        'VERSION': false,
    },
    'rules': {
        'notice/notice':['warn',
            {
                'templateFile': path.resolve(__dirname, './copyright.txt'),
                'varRegexps': {YEAR: /(19|20)[89012][0-9]/},
                'templateVars': {YEAR: new Date().getFullYear()},
                'messages': {
                    'whenFailedToMatch': 'Copyright was not found!',
                }
            }
        ],

        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'import/no-duplicates': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/extensions': [
            'error',
            {
                'ts': 'never',
                'json': 'always'
            }
        ],
        'comma-dangle': ['error', 'never'],
        'function-paren-newline': ['error', 'consistent'],
        'object-curly-spacing': [1, 'never'],
        'array-bracket-spacing': [1, 'never'],
        'max-len': ['error', 120, 2, {
            'ignoreUrls': true,
            'ignoreComments': false,
            'ignoreRegExpLiterals': true,
            'ignoreStrings': true,
            'ignoreTemplateLiterals': true
        }],
        'indent': ['error', 4, {'SwitchCase': 1}],
        "no-shadow": "off",

        'react/prop-types': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/require-default-props': 'off',
        'react/jsx-filename-extension': [1, {
            'extensions': ['.ts', '.tsx']
        }],

        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        "@typescript-eslint/ban-types": [
            "error",
            {
                "types": {
                    "Function": false,
                    "object": false
                }
            }
        ],
        "@typescript-eslint/no-shadow": "error"
    },
    'overrides': [
        {
            "files": ["*.test.tsx", "*.test.ts", "src/__mocks__/**"],
            "rules": {
                "@typescript-eslint/no-empty-function": "off",
                "@typescript-eslint/ban-ts-comment": "off"
            }
        }
    ]
};
