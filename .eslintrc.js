module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['@rocketseat/eslint-config/react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      } // eslint-disable-line
    ],
    'react/prop-types': 'off',
  },
}
