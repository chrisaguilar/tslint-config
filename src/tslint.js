module.exports = {
  // TypeScript Specific
  "adjacent-overload-signatures": true,
  "ban-types": false,
  "member-access": [
    true,
    "check-accessor",
    "check-constructor"
  ],
  "member-ordering": [
    true,
    {
      "order": "fields-first"
    }
  ],
  "no-any": false,
  "no-empty-interface": true,
  "no-import-side-effect": [true, { "ignore-module": "\.(html|css)$" }],
  "no-inferrable-types": false,
  "no-internal-module": true,
  "no-magic-numbers": true,
  "no-namespace": [
    true,
    "allow-declarations"
  ],
  "no-non-null-assertion": true,
  "no-reference": true,
  "no-var-requires": true,
  "only-arrow-functions": false,
  "prefer-for-of": true,
  "promise-function-async": true,
  "typedef": false, // Consider setting this to true
  "typedef-whitespace": [
    true,
    {
      "call-signature": "nospace",
      "index-signature": "nospace",
      "parameter": "nospace",
      "property-declaration": "nospace",
      "variable-declaration": "nospace"
    },
    {
      "call-signature": "onespace",
      "index-signature": "onespace",
      "parameter": "onespace",
      "property-declaration": "onespace",
      "variable-declaration": "onespace"
    }
  ],
  "unified-signatures": true,

  // Functionality
  "await-promise": true,
  "ban": false,
  "curly": [
    true,
    "ignore-same-line"
  ],
  "forin": true,
  "import-blacklist": false,
  "label-position": true,
  "no-arg": true,
  "no-bitwise": true,
  "no-conditional-assignment": true,
  "no-console": false,
  "no-construct": true,
  "no-debugger": true,
  "no-duplicate-super": true,
  "no-duplicate-variable": true,
  "no-empty": true,
  "no-eval": true,
  "no-floating-promises": true,
  "no-for-in-array": true,
  "no-inferred-empty-object-type": true,
  // "no-invalid-template-strings": true,
  "no-invalid-this": true,
  "no-misused-new": true,
  "no-null-keyword": true,
  "no-shadowed-variable": true,
  "no-sparse-arrays": true,
  "no-string-literal": false,
  "no-string-throw": true,
  "no-switch-case-fall-through": true,
  "no-unbound-method": true,
  "no-unsafe-any": false,
  "no-unsafe-finally": true,
  "no-unused-expression": [
    true,
    "allow-fast-null-checks"
  ],
  "no-unused-variable": false,
  "no-use-before-declare": true,
  "no-var-keyword": true,
  "no-void-expression": false,
  "radix": true,
  "restrict-plus-operands": false,
  "strict-boolean-expressions": false,
  "strict-type-predicates": true,
  "switch-default": true,
  "triple-equals": true,
  "typeof-compare": true,
  "use-isnan": true,

  // Maintainability
  "cyclomatic-complexity": true,
  "eofline": true,
  "indent": [
    true,
    "spaces"
  ],
  "linebreak-style": [
    true,
    "LF"
  ],
  "max-classes-per-file": [
    true,
    1
  ],
  "max-file-line-count": [
    true,
    500
  ],
  "max-line-length": [
    true,
    80
  ],
  "no-default-export": true,
  "no-mergeable-namespace": true,
  "no-require-imports": true,
  "object-literal-sort-keys": true,
  "prefer-const": [
    true,
    {
      "destructuring": "all"
    }
  ],
  "trailing-comma": [
    true,
    {
      "multiline": "never",
      "singleline": "never"
    }
  ],

  // Style
  "align": [
    true,
    "arguments",
    "parameters",
    "statements"
  ],
  "array-type": [
    true,
    "array"
  ],
  "arrow-parens": [
    true,
    "ban-single-arg-parens"
  ],
  "arrow-return-shorthand": [
    true,
    "multiline"
  ],
  "callable-types": true,
  "class-name": true,
  "comment-format": [
    true,
    "check-space"
  ],
  "completed-docs": false,
  "file-header": false,
  "import-spacing": true,
  "interface-name": false,
  "interface-over-type-literal": true,
  "jsdoc-format": true,
  "match-default-export-name": true,
  "newline-before-return": true,
  "new-parens": true,
  "no-angle-bracket-type-assertion": true,
  "no-boolean-literal-compare": true,
  "no-consecutive-blank-lines": false,
  "no-parameter-properties": true,
  "no-reference-import": true,
  "no-trailing-whitespace": true,
  "no-unnecessary-callback-wrapper": true,
  "no-unnecessary-initializer": true,
  "no-unnecessary-qualifier": true,
  "object-literal-key-quotes": [
    true,
    "consistent-as-needed"
  ],
  "object-literal-shorthand": true,
  "one-line": [
    true,
    "check-catch",
    "check-finally",
    "check-else",
    "check-open-brace",
    "check-whitespace"
  ],
  "one-variable-per-declaration": [
    true,
    "ignore-for-loop"
  ],
  "ordered-imports": [
    true,
    {
      "import-sources-order": "case-insensitive",
      "named-imports-order": "case-insensitive"
    }
  ],
  "prefer-function-over-method": false,
  "prefer-method-signature": true,
  "prefer-template": true,
  "quotemark": [
    true,
    "single",
    "jsx-single",
    "avoid-escape"
  ],
  "return-undefined": true,
  "semicolon": [
    true,
    "always"
  ],
  "space-before-function-paren": [
    true,
    {
      "anonymous": "always",
      "named": "always",
      "asyncArrow": "always",
      "method": "always",
      "constructor": "always"
    }
  ],
  "variable-name": [
    true,
    "ban-keywords",
    "check-format",
    "allow-leading-underscore",
    "allow-snake-case",
    "allow-trailing-underscore"
  ],
  "whitespace": [
    true,
    "check-branch",
    "check-decl",
    "check-operator",
    "check-module",
    "check-separator",
    "check-type",
    "check-typecast",
    "check-preblock"
  ]
};
