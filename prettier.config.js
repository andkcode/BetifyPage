module.exports = {
  trailingComma: 'es5',
  singleQuote: true,
  semi: false,
  tabWidth: 2,
  printWidth: 80,
  jsxBracketSameLine: false,
  arrowParens: 'always',
  insertPragma: false,
  bracketSpacing: true,
  endOfLine: 'lf',
  overrides: [
    {
      files: ['*.md'],
      options: {
        printWidth: 80,
      },
    },
  ],
};
