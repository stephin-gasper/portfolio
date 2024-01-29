module.exports = {
  extends: ["@10up/eslint-config/react"],
  settings: {
    "import/resolver": {
      jsconfig: {
        config: "jsconfig.json",
      },
    },
    jsdoc: {
      mode: "typescript",
    },
  },
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        mjs: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "react/function-component-definition": 0,
    "react/require-default-props": 0,
    "react/jsx-props-no-spreading": "off",
    "jsdoc/newline-after-description": 0,
  },
};
