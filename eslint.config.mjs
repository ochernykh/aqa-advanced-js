// eslint.config.mjs
export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        require: 'readonly',
        module: 'readonly',
        fetch: 'readonly',
        setTimeout: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
  },
];
