module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    camelcase: 'off',
    semi: ['warn', 'never'],
    'space-before-function-paren': [
      'warn',
      {
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always'
      }
    ],
    // JavaScript
    'space-before-blocks': 'warn',
    'keyword-spacing': [
      'warn',
      {
        before: true,
        after: true
      }
    ],
    'space-infix-ops': 'warn',
    indent: [
      'warn', 2,
      {
        SwitchCase: 1,
        ignoredNodes: ['TemplateLiteral']
      }
    ],
    quotes: [
      'warn',
      'single',
      {
        allowTemplateLiterals: true
      }
    ],
    'linebreak-style': 0,
    'no-trailing-spaces': 'warn',
    'no-empty': [
      'warn',
      {
        allowEmptyCatch: true
      }
    ],
    'key-spacing': [
      'warn',
      {
        afterColon: true
      }
    ],
    'eol-last': ['warn', 'always'],
    'object-curly-spacing': ['warn', 'always'],
    'object-curly-newline': 'warn',
    'no-multi-spaces': 'warn',
    'comma-dangle': ['warn', 'never'],
    'comma-spacing': [
      'warn', {
        before: false,
        after: true
      }
    ],
    // vue
    'vue/component-name-in-template-casing': [
      'warn',
      'PascalCase',
      {
        registeredComponentsOnly: false
      }
    ],
    'vue/attributes-order': [
      'warn',
      {
        alphabetical: true
      }
    ],
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        baseIndent: 0
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/ban-ts-comment': 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
