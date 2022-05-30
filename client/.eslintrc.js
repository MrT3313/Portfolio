module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error','single'],
    'semi': ['error','always'],
    'object-curly-spacing': ['error', 'always'],
    'max-len': ['error', {
      code: 100,
      ignoreStrings: true,
      ignoreUrls: true,
    }],
    'react/react-in-jsx-scope': 'off', // not needed with next
    // allow console.log during development only
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // disable prop validation
    'react/prop-types': 0
  }
};
