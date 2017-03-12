module.exports = {
  "array-bracket-spacing": [
    true,
    "always",
    {
      "arraysInArrays": false,
      "objectsInArrays": false,
      "singleValue": false
    }
  ],
  "block-spacing": [
    true, "always"
  ],
  "brace-style": [
    true, "1tbs",
    {
      "allowSingleLine": true
    }
  ],
  "handle-callback-err": [
    true,
    "^(err|error|e|rej|reject)$"
  ],
  "no-constant-condition": true,
  "no-control-regex": true,
  "no-duplicate-case": true,
  "no-empty-character-class": true,
  "no-ex-assign": true,
  "no-extra-boolean-cast": true,
  "no-extra-semi": true,
  "no-inner-declarations": [
    true, "both"
  ],
  "no-invalid-regexp": true,
  "no-irregular-whitespace": true,
  "no-multi-spaces": [
    true,
    {
      "exceptions": {
        "BinaryExpression": false,
        "PropertyAssignment": false,
        "VariableDeclaration": false
      }
    }
  ],
  "no-regex-spaces": true,
  "no-sparse-arrays": true,
  "no-unexpected-multiline": true,
  "object-curly-spacing": [
    true,
    "always"
  ],
  "space-in-parens": false,
  "ter-arrow-body-style": [
    true, "as-needed",
    {
      "requireReturnForObjectLiteral": true
    }
  ],
  "ter-arrow-spacing": [
    true,
    {
      "before": true,
      "after": true
    }
  ],
  "valid-jsdoc": [
    true,
    {
      "prefer": {
        "return": "returns"
      },
      "requireReturn": true,
      "requireParamDescription": true,
      "requireReturnDescription": true,
      "matchDescription": "^[A-Z][A-Za-z0-9\\s]*[.]$"
    }
  ],
  "valid-typeof": true
}
