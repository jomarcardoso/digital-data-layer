module.exports = {
  extends: ['airbnb-typescript-prettier'],
  env: {
    jest: true,
    browser: true,
    es6: true,
    es2017: true,
    es2020: true,
    es2021: true,
    worker: true
  },
  rules: {
    'import/no-default-export': 'off',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
  },
};