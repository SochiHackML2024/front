module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "prettier",
    "plugin:vitest/recommended",
  ],
  plugins: ["prettier", "unused-imports", "import", "no-comments" ,"react-refresh"],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "no-comments/disallowComments": [
      "warn",
      {
        allow: [
          "global",
          "eslint",
          "TODO",
          "NOTE",
          "@ts-.*",
          "FIXME",
          "todo",
          `\\*\\s.*\n\\s\\*\\s+@`,
        ],
      },
    ],
    "vitest/max-nested-describe": [
      "error",
      {
        max: 3,
      },
    ],
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ],
    "@typescript-eslint/prefer-ts-expect-error": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": ["error"],
    "import/order": [
      1,
      {
        groups: ["external", "internal", ["parent", "sibling", "index"]],
        distinctGroup: false,
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "src/__generated__/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "src/**/*",
            group: "parent",
            position: "before",
          },
          {
            pattern: "./**",
            group: "sibling",
            position: "after",
          },
          {
            pattern: "**",
            group: "external",
          },
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
}
