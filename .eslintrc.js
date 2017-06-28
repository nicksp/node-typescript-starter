const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  parser: 'typescript-eslint-parser',
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true
    }
  },
  env: {
    node: true,
    mocha: true,
    es6: true
  },
  rules: {
    "generator-star-spacing": [
      ERROR,
      {
        "before": true,
        "after": true
      }
    ],
    "no-shadow": OFF,
    "import/no-unresolved": OFF,
    "import/extensions": OFF,
    "require-yield": OFF,
    "no-param-reassign": OFF,
    "comma-dangle": OFF,
    "no-underscore-dangle": OFF,
    "no-control-regex": OFF,
    "import/no-extraneous-dependencies": [
      ERROR,
      {
        "devDependencies": true
      }
    ],
    "func-names": OFF,
    "no-unused-expressions": OFF,
    "prefer-arrow-callback": WARNING,
    "no-use-before-define": [
      ERROR,
      {
        "functions": false
      }
    ],
    "max-len": [
      ERROR,
      120,
      2
    ],
    "semi": [
      ERROR,
      "never"
    ],
    "strict": [
      ERROR,
      "global"
    ],
    "arrow-parens": [
      ERROR,
      "always"
    ]
  }
};
