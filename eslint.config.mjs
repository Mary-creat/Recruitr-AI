import js from '@eslint/js'

export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.mjs"],
    ignores: ["node_modules/**"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        console: "readonly", // fix for 'console' is not defined
        require: "readonly"  // fix for 'require' is not defined
      }
    }
  }
];
