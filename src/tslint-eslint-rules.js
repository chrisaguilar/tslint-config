module.exports = {
    // Possible Errors
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
    "no-regex-spaces": true,
    "no-unexpected-multiline": true,
    "valid-typeof": true,

    // Node.js and CommonJS
    "handle-callback-err": [
        true,
        "^(err|error|e|rej|reject)$"
    ],

    // Stylistic Issues
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
    ]
}
