module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
    "plugin:promise/recommended",
    "plugin:prettier/recommended",
    "plugin:jsdoc/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "react-hooks",
    "import",
    "jsx-a11y",
    "simple-import-sort",
    "sonarjs",
    "unicorn",
    "promise",
    "jsdoc",
  ],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"],
      },
    },
  },
  rules: {
    // Core ESLint rules
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-unused-vars": ["error", { argsIgnorePattern: "^_", destructuredArrayIgnorePattern: "^_" }],
    "no-use-before-define": ["error", { functions: false, classes: true, variables: true }],
    "no-var": "error",
    "prefer-const": "error",
    "prefer-template": "error",
    quotes: ["error", "single", { avoidEscape: true }],

    // React rules
    "react/react-in-jsx-scope": "off", // Not needed in React 17+
    "react/prop-types": "error", // Since we're not using TypeScript, prop validation is important
    "react/jsx-filename-extension": ["warn", { extensions: [".jsx"] }],
    "react/jsx-pascal-case": "error",
    "react/jsx-no-bind": ["warn", { allowArrowFunctions: true }],
    "react/self-closing-comp": "error",
    "react/no-array-index-key": "warn",
    "react/no-danger": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // Import rules
    "import/no-unresolved": "error",
    "import/no-named-as-default": "off",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",

    // Import sorting rules
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",

    // SonarJS rules
    "sonarjs/cognitive-complexity": ["error", 15],
    "sonarjs/no-duplicate-string": ["error", { threshold: 3 }],
    "sonarjs/no-identical-functions": "error",

    // Unicorn rules (some disabled because they're too opinionated)
    "unicorn/prevent-abbreviations": "off",
    "unicorn/no-null": "off",
    "unicorn/filename-case": ["error", { case: "kebabCase" }],
    "unicorn/no-array-reduce": "off",

    // Accessibility rules
    "jsx-a11y/alt-text": "error",
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/aria-role": "error",
    "jsx-a11y/anchor-is-valid": ["error", { components: ["Link"], specialLink: ["to"] }],

    // Promise rules
    "promise/always-return": "warn",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",

    // JSDoc rules
    "jsdoc/require-param-type": "error",
    "jsdoc/require-returns-type": "error",
    "jsdoc/no-undefined-types": "error",
  },
  overrides: [
    // Configuration files
    {
      files: ["webpack.config.js", ".eslintrc.js"],
      rules: {
        "unicorn/filename-case": "off",
      },
    },
    // Test files
    {
      files: ["**/*.test.js", "**/*.spec.js"],
      env: {
        jest: true,
      },
      rules: {
        "no-undef": "off",
      },
    },
  ],
};
