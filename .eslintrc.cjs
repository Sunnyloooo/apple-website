module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    "plugin:prettier/recommended",
    "plugin:@react-three/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', "prettier", "@react-three"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        "semi": false,
        "endOfLine": "auto",
        "tabWidth": 2,
        "printWidth": 160,
        "singleQuote": true,
        "trailingComma": "all",
        "bracketSameLine": true,
        "plugins": ["prettier-plugin-tailwindcss"]
      }
    ],
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
