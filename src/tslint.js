module.exports = {
    // region Typescript-Specific Rules

    /**
     * Enforces function overloads to be consecutive.
     */
    'adjacent-overload-signatures': true,

    /**
     * Bans the comma operator.
     */
    'ban-comma-operator': true,

    /**
     * Bans specific types from being used. Does not ban the corresponding
     * runtime objects from being used.
     */
    'ban-types': false,

    /**
     * Requires explicit visibility declarations for class members.
     */
    'member-access': [true, 'check-accessor', 'check-constructor', 'check-parameter-property'],

    /**
     * A consistent ordering for class members can make classes easier to read,
     * navigate, and edit.
     */
    'member-ordering': [
        true,
        {
            order: ['static-field', 'instance-field', 'constructor', 'static-method', 'instance-method'],
            alphabetize: false
        }
    ],

    /**
     * Disallows usages of `any` as a type declaration.
     */
    'no-any': false,

    /**
     * Forbids empty interfaces.
     */
    'no-empty-interface': true,

    /**
     * Avoid import statements with side-effect.
     */
    'no-import-side-effect': [true, { 'ignore-module': '\\.(html|s[ca]ss|css)$' }],

    /**
     * Disallows explicit type declarations for variables or parameters
     * initialized to a number, string, or boolean.
     */
    'no-inferrable-types': true,

    /**
     * Disallows internal `module`.
     *
     * Use `namespace` instead.
     */
    'no-internal-module': true,

    /**
     * Disallows the use constant number values outside of variable assignments.
     */
    'no-magic-numbers': false,

    /**
     * Disallows use of internal modules and `namespace`s.
     */
    'no-namespace': [true, 'allow-declarations'],

    /**
     * Disallows non-null assertions using the `!` postfix operator.
     */
    'no-non-null-assertion': true,

    /**
     * Disallows reassigning parameters.
     */
    'no-parameter-reassignment': true,

    /**
     * Disallows `/// <reference path=''>` imports (use ES6-style imports instead).
     */
    'no-reference': true,

    /**
     * Warns if a type assertion does not change the type of an expression.
     */
    'no-unnecessary-type-assertion': true,

    /**
     * Disallows the user of require statements except in import statements.
     *
     * In other words, the use of forms such as
     * `var module = require('module')` are banned. Instead use the ES6 style
     * imports of `import foo = require('foo')` imports.
     */
    'no-var-requires': false,

    /**
     * Disallows traditional (non-arrow) function expressions.
     *
     * - `allow-declarations` allows standalone function declarations
     * - `allow-named-functions` allows the expression `function foo() {}` but
     *   not `function() {}`
     */
    'only-arrow-functions': [true, 'allow-declarations', 'allow-named-functions'],

    /**
     * Recommends a `for ... of` loop over a standard `for` loop if the index
     * is only used to access the array being iterated.
     */
    'prefer-for-of': true,

    /**
     * Requires any function or method that returns a promise to be marked
     * async.
     *
     * Ensures that each function is only capable of
     * 1. Returning a rejected promise
     * 2. Throwing and `Error` object
     *
     * In constrast, non-`async Promise`-returning functions are technically
     * capable of either. This practice removes a requirement for consuming
     * code to handle both cases.
     */
    'promise-function-async': true,

    /**
     * Requires type definitions to exist.
     *
     * - `call-signature` checks return type of functions.
     * - `arrow-call-signature` checks return type of arrow functions.
     * - `parameter` checks type specifier of function parameters for non-arrow functions.
     * - `arrow-parameter` checks type specifier of function parameters for arrow functions.
     * - `property-declaration` checks return types of interface properties.
     * - `variable-declaration` checks non-binding variable declarations.
     * - `member-variable-declaration` checks member variable declarations.
     * - `object-destructuring` checks object destructuring declarations.
     * - `array-destructuring` checks array destructuring declarations.
     * [ true, 'call-signature', 'arrow-call-signature', 'parameter', 'arrow-parameter', 'property-declaration', 'variable-declaration', 'member-variable-declaration', 'object-destructuring', 'array-destructuring' ],
     */
    typedef: false,

    /**
     * Requires or disallows whitespace for type definitions.
     *
     * Determines if a space is required or not before the type colon in a
     * type specifier.
     */
    'typedef-whitespace': [
        true,
        {
            'call-signature': 'nospace',
            'index-signature': 'nospace',
            parameter: 'nospace',
            'property-declaration': 'nospace',
            'variable-declaration': 'nospace'
        },
        {
            'call-signature': 'onespace',
            'index-signature': 'onespace',
            parameter: 'onespace',
            'property-declaration': 'onespace',
            'variable-declaration': 'onespace'
        }
    ],

    /**
     * Warns for any two overloads that could be unified into one by using a
     * union or an optional/rest parameter.
     */
    'unified-signatures': true,

    // endregion

    // region Functionality

    /**
     * Warns for an awaited value that is not a Promise.
     */
    'await-promise': true,

    /**
     * Bans the use of specific functions or global methods.
     */
    ban: false,

    /**
     * Enforces braces for `if`/`for`/`do`/`while` statements.
     */
    curly: [true, 'ignore-same-line'],

    /**
     * Requires a `for ... in` statement to be filtered with an `if` statement.
     */
    forin: true,

    /**
     * Disallows importing the specified modules directly via `import` and
     * `require`. Instead only sub modules may be imported from that module.
     */
    'import-blacklist': false,

    /**
     * Only allows labels in sensible locations.
     *
     * This rule only allows labels to be on `do`/`for`/`while`/`switch`
     * statements.
     */
    'label-position': true,

    /**
     * Disallows use of `arguments.callee`.
     */
    'no-arg': true,

    /**
     * Disallows bitwise operators.
     */
    'no-bitwise': true,

    /**
     * Disallows any type of assignment in conditionals.
     */
    'no-conditional-assignment': true,

    /**
     * Bans the use of specified `console` methods.
     */
    'no-console': false,

    /**
     * Disallows access to the constructors of `String`, `Number`, and
     * `Boolean`.
     *
     * Disallows constructor use such as `new Number(foo)` but does not
     * disallow `Number(foo)`.
     */
    'no-construct': true,

    /**
     * Disallows `debugger` statements.
     */
    'no-debugger': true,

    /**
     * Warns if `super()` appears twice in a constructor.
     */
    'no-duplicate-super': true,

    /**
     * Prevents duplicate cases in switch statements.
     */
    'no-duplicate-switch-case': true,

    /**
     * Disallows duplicate variable declarations in the same block scope.
     *
     * Only useful when using the `var` keyword - the compiler will detect
     * redeclarations of `let` and `const` variables.
     */
    'no-duplicate-variable': [true, 'check-parameters'],

    /**
     * Bans usage of the delete operator with computed key expressions.
     *
     * Deleting dynamically computed keys is dangerous and not well optimized.
     */
    'no-dynamic-delete': true,

    /**
     * Disallows empty blocks.
     */
    'no-empty': [true, 'allow-empty-catch'],

    /**
     * Disallows `eval` function invocations.
     */
    'no-eval': true,

    /**
     * Promises returned by functions must be handled appropriately.
     */
    'no-floating-promises': true,

    /**
     * Disallows iterating over an array with a `for ... in` loop.
     *
     * Alternatives:
     * - `array.forEach((value, index) => {...})`
     * - `for (const [index, value] of array.entries()) { ... }`
     * - `for (let i = 0; i < array.length; i++) { ... }`
     */
    'no-for-in-array': true,

    /**
     * Disallows importing modules that are not lsited as a dependency in the
     * project's package.json.
     */
    'no-implicit-dependencies': false,

    /**
     * Disallows type inference of `{}` (empty object type) at function and
     * constructor call sites.
     */
    'no-inferred-empty-object-type': true,

    /**
     * Warns on use of `${}` in non-template strings.
     */
    'no-invalid-template-strings': true,

    /**
     * Disallows using `this` keyword outside of classes.
     */
    'no-invalid-this': [true, 'check-function-in-method'],

    /**
     * Warns on apparent attempts to define constructors for interfaces or
     * `new` for classes.
     */
    'no-misused-new': true,

    /**
     * Disallows use of the `null` keyword literal.
     */
    'no-null-keyword': false,

    /**
     * Forbids an object literal to appear in a type assertion expression.
     * Casting to `any` is still allowed.
     */
    'no-object-literal-type-assertion': true,

    /**
     * Disallows unnecessary `return await`.
     */
    'no-return-await': true,

    /**
     * Disallows shadowing variable declarations.
     */
    'no-shadowed-variable': true,

    /**
     * Forbids array literals to contain missing elements.
     */
    'no-sparse-arrays': true,

    /**
     * Forbids unnecessary string literal property access.
     *
     * Allows `obj['prop-erty']`, disallows `obj['property']` (should be
     * `obj.property`).
     */
    'no-string-literal': true,

    /**
     * Flags throwing plain strings or concatenations of strings because only
     * `Error`s produce proper stack traces.
     */
    'no-string-throw': true,

    /**
     * Disallows importing and submodules.
     */
    'no-submodule-imports': false,

    /**
     * Disallows falling through case statements.
     */
    'no-switch-case-fall-through': true,

    /**
     * Disallows unnecessary references to `this`.
     */
    'no-this-assignment': [true, { 'allow-destructuring': true }],

    /**
     * Warns when a method is used as outside of a method call.
     */
    'no-unbound-method': [true, 'ignore-static'],

    /**
     * Disallows classes that are not strictly necessary.
     *
     * - `allow-constructor-only` ignores classes whose members are constructors.
     * - `allow-empty-class` ignores class DemoClass {}.
     * - `allow-static-only` ignores classes whose members are static.
     */
    'no-unnecessary-class': false,

    /**
     * Warns when using an expression of type `any` in a dynamic way. Uses are
     * only allowed if they would work for `{} | null | undefined`. Type casts
     * and tests are allowed. Expressions that work on all values
     * (such as `'' + x`) are allowed.
     */
    'no-unsafe-any': false,

    /**
     * Disallows control flow statements, such as `return`, `continue`,
     * `break`, and `throw`s in `finally` blocks.
     */
    'no-unsafe-finally': true,

    /**
     * Disallows unused expression statements.
     */
    'no-unused-expression': [true, 'allow-fast-null-checks', 'allow-tagged-template'],

    /**
     * Disallows unused imports, variables, function, and private class members.
     */
    'no-unused-variable': true,

    /**
     * Disallows usage of variables before their declaration.
     */
    'no-use-before-declare': true,

    /**
     * Disallows use of the `var` keyword.
     */
    'no-var-keyword': true,

    /**
     * Required expressions of type `void` to appear in statement position.
     */
    'no-void-expression': [true, 'ignore-arrow-function-shorthand'],

    /**
     * Recommends to use a conditional expression instead of assigning to the
     * same thing in each branch of an if statement.
     */
    'prefer-conditional-expression': [true, 'check-if-else'],

    /**
     * Enforces the use of the ES2015 object spread operator over
     * `Object.assign()` where appropriate.
     */
    'prefer-object-spread': true,

    /**
     * Requires the radix parameter to be specified when calling `parseInt`.
     */
    radix: true,

    /**
     * When adding two variables, operands must both be of type `number` or of
     * type `string`.
     */
    'restrict-plus-operands': true,

    /**
     * Restricts the types allowed in boolean expressions. By default only
     * booleans are allowed.
     */
    'strict-boolean-expressions': false,

    /**
     * Warns for type predicates that are always true or always false.
     */
    'strict-type-predicates': true,

    /**
     * Require a `default` case in all `switch` statements.
     */
    'switch-default': true,

    /**
     * Requires `===` and `!==` in place of `==` and `!=`.
     */
    'triple-equals': true,

    /**
     * Makes sure result of `typeof` is compared to correct string values.
     */
    'typeof-compare': false,

    /**
     * Warns if an explicitly specified type argument is the default for that
     * type parameter.
     */
    'use-default-type-parameter': true,

    /**
     * Enforces the use of the `isNaN()` function to check for `NaN` references
     * instead of a comparison to the `NaN` constant.
     */
    'use-isnan': true,

    // endregion

    // region Maintainability

    /**
     * Enforces a threshold of cyclomatic complexity.
     */
    'cyclomatic-complexity': true,

    /**
     * Warns when deprecated APIs are used.
     */
    deprecation: true,

    /**
     * Ensures the file ends with a newline.
     */
    eofline: true,

    /**
     * Enforces indentation with tabs or spaces.
     */
    indent: [true, 'spaces', 4],

    /**
     * Enforces a consistend linebreak style.
     */
    'linebreak-style': [true, 'LF'],

    /**
     * A file may not contain more than the specified number of classes.
     */
    'max-classes-per-file': [true, 1],

    /**
     * Requires files to remain under a certain number of lines.
     */
    'max-file-line-count': [true, 500],

    /**
     * Requires lines to be under a certain max length.
     */
    'max-line-length': [true, 120],

    /**
     * Disallows default exports in ES6-style modules.
     */
    'no-default-export': true,

    /**
     * Disallows multiple import statements from the same module.
     */
    'no-duplicate-imports': true,

    /**
     * Disallows mergeable namespaces in the same file.
     */
    'no-mergeable-namespace': true,

    /**
     * Disallows invocation of `require()`.
     */
    'no-require-imports': false,

    /**
     * Checks ordering of keys in object literals.
     */
    'object-literal-sort-keys': [true, 'ignore-case', 'match-declaration-order', 'shorthand-first'],

    /**
     * Requires that variable declarations use `const` instead of `let` and
     * `var` if possible.
     */
    'prefer-const': [true, { destructuring: 'all' }],

    /**
     * Requires that private variables are marked as `readonly` if they're
     * never modified outside of the constructor.
     *
     * If a private variable is only assigned to in the constructor, it should
     * be declared as `readonly`.
     *
     * Marking never-modified variables as readonly helps enforce the code's
     * intent of keeping them as never-modified. It can also help prevent
     * accidental changes of members not meant to be changed.
     *
     * If `only-inline-lambdas` is specified, only immediately-declared arrow
     * functions are checked.
     */
    'prefer-readonly': true,

    /**
     * Requires or disallows trailing commas in array and object literals,
     * destructuring assignments, function typings, named import and exports,
     * and function parameters.
     */
    'trailing-comma': [true, { multiline: 'never', singleline: 'never' }],

    // endregion

    // region Style

    /**
     * Enforces vertical alignment
     */
    align: false,

    /**
     * Requires using either `T[]` or `Array` for arrays.
     */
    'array-type': [true, 'array'],

    /**
     * Requires parenthesis around the parameters of arrow function definitions.
     */
    'arrow-parens': true,

    /**
     * Suggests to convert `() => { return x; }` to `() => x;`.
     */
    'arrow-return-shorthand': [true, 'multiline'],

    /**
     * In a binary expression, a literal should always be on the right-hand
     * side if possible. For example, prefer `x + 1` over `1 + x`;
     */
    'binary-expression-operand-order': true,

    /**
     * An interface or literal type with just a call signature can be written
     * as a function type.
     */
    'callable-types': true,

    /**
     * Enforces PascalCased class and interface names.
     */
    'class-name': true,

    /**
     * Enforces formatting rules for single-line comments.
     */
    'comment-format': [true, 'check-space'],

    /**
     * Enforces documentation for important items to be filled out.
     * [true,{classes: true,enums: true,'enum-members': true,functions: true,
     * interfaces: true,methods: true,namespaces: true,properties: true,types:
     * true,variables: true}],
     */
    'completed-docs': false,

    /**
     * Enforces UTF-8 file encoding.
     */
    encoding: true,

    /**
     * Enforces a certain header comment for all files, matched by a RegEx.
     */
    'file-header': false,

    /**
     * Ensures proper spacing between import statement keywords.
     */
    'import-spacing': true,

    /**
     * Requires interface names to begin with a capital 'I'.
     */
    'interface-name': true,

    /**
     * Prefer an interface declaration over a type literal (`type T = { ... }`).
     */
    'interface-over-type-literal': false,

    /**
     * Enforces basic format rules for JSDoc comments.
     */
    'jsdoc-format': [true, 'check-multiline-start'],

    /**
     * Requires that a default import have the same name as the declaration it
     * imports. Does nothing for anonymous default exports.
     */
    'match-default-export-name': false,

    /**
     * Enforces a blank line before `return` when it's not the only line in the
     * block.
     */
    'newline-before-return': true,

    /**
     * Requires that chained method calls be broken apart onto separate lines.
     *
     * This style helps to keep code 'vertical', avoiding the need for
     * side-scrolling in IDEs or text editors.
     */
    'newline-per-chained-call': false,

    /**
     * Requires parentheses when invoking a constructor via the `new` keyword.
     */
    'new-parens': true,

    /**
     * Requires the use of `as Type` for type assertions instead of `<Type>`.
     */
    'no-angle-bracket-type-assertion': true,

    /**
     * Warns on comparison to a boolean literal, as in `x === true`.
     */
    'no-boolean-literal-compare': true,

    /**
     * Disallows one or more blank lines in a row.
     */
    'no-consecutive-blank-lines': [true, 2],

    /**
     * Disallows irregular whitespace outside of strings and comments.
     */
    'no-irregular-whitespace': true,

    /**
     * Disallows parameter properties in class constructors.
     */
    'no-parameter-properties': false,

    /**
     * Forbids JSDoc which duplicates TypeScript functionality.
     */
    'no-redundant-jsdoc': true,

    /**
     * Don't `<reference types='foo' />` if you import `foo` anyway.
     */
    'no-reference-import': true,

    /**
     * Disallows trailing whitespace at the end of a line.
     */
    'no-trailing-whitespace': true,

    /**
     * Replaces `x => f(x)` with just `f`.
     */
    'no-unnecessary-callback-wrapper': true,

    /**
     * Forbids a `var`/`let` statement or destructuring initializer to be
     * initialized to `undefined`.
     */
    'no-unnecessary-initializer': true,

    /**
     * Warns when a namespace qualifier (`A.x`) is unnecessary.
     */
    'no-unnecessary-qualifier': true,

    /**
     * Checks that decimal literals should begin with `0.` instead of just `.`,
     * and should not end with a trailing `0`.
     */
    'number-literal-format': true,

    /**
     * Enforces a consistent object literal property quote style.
     */
    'object-literal-key-quotes': [true, 'consistent-as-needed'],

    /**
     * Enforces/disallows use of ES6 object literal syntax.
     */
    'object-literal-shorthand': true,

    /**
     * Requires the specified tokens to be on the same line as the expression
     * preceding them.
     */
    'one-line': [true, 'check-catch', 'check-finally', 'check-else', 'check-open-brace', 'check-whitespace'],

    /**
     * Disallows multiple variable definitions in the same declaration
     * statement.
     */
    'one-variable-per-declaration': [true, 'ignore-for-loop'],

    /**
     * Requires that import statements be alphabetized and grouped.
     */
    'ordered-imports': [
        true,
        {
            'import-sources-order': 'case-insensitive',
            'named-imports-order': 'case-insensitive',
            'grouped-imports': true,
            'module-source-path': 'full'
        }
    ],

    /**
     * Warns for class methods that do not use 'this'.
     */
    'prefer-function-over-method': false,

    /**
     * Prefer `foo(): void` over `foo: () => void` in interfaces and types.
     */
    'prefer-method-signature': true,

    /**
     * Prefer a `switch` statement to an `if` statement with simple `===`
     * comparisons.
     */
    'prefer-switch': [true, { 'min-cases': 4 }],

    /**
     * Prefer a template expression over string literal concatenation.
     */
    'prefer-template': true,

    /**
     * Requires single or double quotes for string literals.
     */
    quotemark: [true, 'single', 'jsx-single', 'avoid-template', 'avoid-escape'],

    /**
     * Prefer `return;` in void functions and `return undefined;` in
     * value-returning functions.
     */
    'return-undefined': true,

    /**
     * Enforces consistent semicolon usage at the end of every statement.
     */
    semicolon: [true, 'always', 'strict-bound-class-methods'],

    /**
     * Require or disallow a space before function parenthesis.
     */
    'space-before-function-paren': [true, 'always'],

    /**
     * Enforces spaces within parentheses or disallow them.
     */
    'space-within-parens': [true, 0],

    /**
     * Checks whether the final clause of a switch statement end in `break;`
     */
    'switch-final-break': [true, 'always'],

    /**
     * Check that type literal memebers are separated by semicolons. Enforces a
     * trailing semicolon for multiline type literals.
     */
    'type-literal-delimiter': true,

    /**
     * Checks variable names for various errors.
     */
    'variable-name': [
        true,
        'ban-keywords',
        'check-format',
        'allow-leading-underscore',
        'allow-snake-case',
        'allow-trailing-underscore',
        'allow-pascal-case'
    ],

    /**
     * Enforces whitespace style conventions.
     */
    whitespace: [
        true,
        'check-branch',
        'check-decl',
        'check-operator',
        'check-module',
        'check-separator',
        'check-rest-spread',
        'check-type',
        'check-typecast',
        'check-type-operator',
        'check-preblock'
    ]

    // endregion
};
