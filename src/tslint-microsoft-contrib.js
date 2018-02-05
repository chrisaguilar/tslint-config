module.exports = {
    /**
     * Avoid Chai assertions that invoke `indexOf` and compare for a -1 result.
     *
     * ```
     * // Bad
     * expect(arr.indexOf(x)).to.not.equal(-1);
     *
     * // Good
     * expect(arr).to.contain(x);
     * ```
     */
    'chai-prefer-contains-to-index-of': true,

    /**
     * Avoid Chai assertions that result in vague errors.
     *
     * ```
     * // Bad
     * expect(something).to.be.true
     *
     * // Good
     * expect(something).to.equal(true, 'expected something to have occurred');
     * ```
     */
    'chai-vague-errors': true,

    /**
     * The name of the exported module must match the filename of the source
     * file. This is case-sensitive but ignores file extension.
     *
     * Options: <function-name-regex>[]
     */
    'export-name': false,

    /**
     * The name of the imported module must match the name of the thing being
     * imported.
     *
     * Options: {[module: string]: string}[]
     */
    'import-name': false,

    /**
     * Do not use insecure sources for random bytes.
     *
     * Alternatives: `crypto.randomBytes && window.crypto.getRandomValues`
     */
    'insecure-random': false,

    /**
     * When a jQuery Deferred instance is created, then either `reject()` or
     * `resolve()` must be called on it within all code branches in the scope.
     */
    'jquery-deferred-must-complete': true,

    /**
     * Avoid long functions. The line count of a function body must not exceed
     * the value configured within this rule's options.
     */
    'max-func-body-length': [
        true,
        {
            'func-body-length': 50,
            'func-expression-body-length': 50,
            'arrow-body-length': 50,
            'method-body-length': 50,
            'ctor-body-length': 50,
            'ignore-comments': true
        }
    ],

    /**
     * Do not invoke Mocha's describe.only, it.only or context.only functions.
     */
    'mocha-avoid-only': true,

    /**
     * All test logic in a Mocha test case should be within Mocha lifecycle
     * method and not defined statically to execute when the module loads.
     *
     * Put all assignments and initialization statements in one of:
     * - before
     * - beforeEach
     * - beforeAll
     * - after
     * - afterEach
     * - afterAll
     * - it
     */
    'mocha-no-side-effect-code': true,

    /**
     * A function declares a MochaDone parameter but only resolves it
     * synchronously in the main function. The MochaDone parameter can be
     * safely removed from the parameter list.
     */
    'mocha-unneeded-done': true,

    /**
     * Do not use banned terms: caller, callee, eval, arguments
     */
    'no-banned-terms': true,

    /**
     * Do not use constant expressions in conditions.
     *
     * Options: { checkLoops: boolean }
     */
    'no-constant-condition': [true, { checkLoops: false }],

    /**
     * Do not use control characters in regular expressions.
     */
    'no-control-regex': true,

    /**
     * Do not use cookies
     */
    'no-cookies': true,

    /**
     * Do not delete expressions. Only properties should be deleted.
     */
    'no-delete-expression': true,

    /**
     * Do not disable auto-sanitization of HTML because this opens up your page
     * to an XSS attack. Specifically, do not use the execUnsafeLocalFunction
     * or setInnerHTMLUnsafe functions.
     */
    'no-disable-auto-sanitization': true,

    /**
     * Do not write to document.domain.
     */
    'no-document-domain': true,

    /**
     * Do not use `document.write`
     */
    'no-document-write': true,

    /**
     * Avoid an empty line after an opening brace.
     */
    'no-empty-line-after-opening-brace': false,

    /**
     * Do not use the execScript functions.
     */
    'no-exec-script': true,

    /**
     * Avoid use of for-in statements. They can be replaced by `Object.keys`.
     */
    'no-for-in': true,

    /**
     * Do not use the version of the Function constructor that accepts a string
     * argument to define the body of the function.
     */
    'no-function-constructor-with-string-args': true,

    /**
     * Do not use function expressions; use arrow functions instead.
     *
     * Function expressions that contain a `this` reference are allowed and
     * will not create a failure.
     */
    'no-function-expression': true,

    /**
     * Do not use strings that start with 'http:'. URL strings should start
     * with 'https:'.
     */
    'no-http-string': true,

    /**
     * Avoid use of increment and decrement operators particularly as part of
     * complicated expressions.
     */
    'no-increment-decrement': false,

    /**
     * Do not write values to innerHTML, outerHTML, or set HTML useing the
     * jQuery html() function.
     */
    'no-inner-html': true,

    /**
     * Do not use invalid regular expression strings in the RegExp constructor.
     */
    'no-invalid-regexp': true,

    /**
     * Do not create HTML elements using jQuery and string concatenation.
     */
    'no-jquery-raw-elements': true,

    /**
     * Do not declare multiline strings.
     */
    'no-multiline-string': true,

    /**
     * Do not use octal literals or escaped octal sequences.
     */
    'no-octal-literal': true,

    /**
     * Do not use multiple spaces in a regular expression literal.
     */
    'no-regex-spaces': true,

    /**
     * Do not use relative paths when importing external modules or ES6 import
     * declarations.
     */
    'no-relative-imports': false,

    /**
     * Avoid single line block comments and use single line comments instead.
     */
    'no-single-line-block-comment': true,

    /**
     * Do not use the version of `setImmediate` that accepts code as a string
     * argument.
     */
    'no-string-based-set-immediate': true,

    /**
     * Do not use the version of `setInterval` that accepts code as a string
     * argument.
     */
    'no-string-based-set-interval': true,

    /**
     * Do not use the version of `setTimeout` that accepts code as a string
     * argument.
     */
    'no-string-based-set-timeout': true,

    /**
     * Do not use suspicious comments, such as BUG, HACK, FIXME, LATER, LATER2,
     * TODO.
     */
    'no-suspicious-comment': true,

    /**
     * Do not use the idiom `typeof x === 'undefined'`. You can safely use
     * `x === undefined`.
     */
    'no-typeof-undefined': true,

    /**
     * Ensures that double quoted strings are passed to a localize call to
     * provide proper strings for different locales.
     */
    'no-unexternalized-strings': false,

    /**
     * Do not bind `this` as the context for a function literal or lambda
     * expression.
     *
     * If you bind `this` as the context to a function literal, then you should
     * just use a lambda without the bind. If you bind `this` as the context
     * to a lambda, then you can remove the bind call because `this` is already
     * the context for lambdas.
     */
    'no-unnecessary-bind': true,

    /**
     * Do not declare a variable only to return it from the function on the
     * next line.
     */
    'no-unnecessary-local-variable': true,

    /**
     * Do not write a method that only calls `super()` on the parent method with
     * the same arguments.
     *
     * You can safely remove methods like this and JavaScript will correctly
     * dispatch the method to the parent object.
     */
    'no-unnecessary-override': true,

    /**
     * Remove unnecessary semicolons.
     */
    'no-unnecessary-semicolons': false,

    /**
     * Avoid writing browser-specific code for unsupported browser versions.
     */
    'no-unsupported-browser-code': false,

    /**
     * Avoid keeping files around that only contain commented out code, are
     * completely empty, or only contain whitespace characters
     */
    'no-useless-files': false,

    /**
     * Do not use `with` statements. Assign the item to a new variable instead.
     */
    'no-with-statement': true,

    /**
     * Detect `require()` function calls for something that is not a string
     * literal.
     */
    'non-literal-require': true,

    /**
     * Avoid timing attacks by not making direct string comparisons to
     * sensitive data.
     *
     * Do not compare against variables named password, secret, api, apiKey,
     * token, auth, pass, or hash.
     */
    'possible-timing-attack': true,

    /**
     * For accessibility of your website:
     *
     * - Anchor element link text should be at least 4 characters long.
     * - Links with the same href should have the same link text.
     * - Links that point to different hrefs should have different link text.
     * - Links with images and text content, the alt attribute should be unique
     *   to the text content or empty.
     * - An an anchor element's href prop value must not be just #.
     */
    'react-a11y-anchors': true,

    /**
     * For accessibility of your website, enforce that elements that do not
     * support ARIA roles, states, and properties do not have those attributes.
     */
    'react-a11y-aria-unsupported-elements': true,

    /**
     * For accessibility of your website, Elements with event handlers must
     * have explicit role or implicit role.
     */
    'react-a11y-event-has-role': true,

    /**
     * For accessibility of your website, enforce that inputs element with
     * `type="image"` must have non-empty alt attribute.
     */
    'react-a11y-image-button-has-alt': true,

    /**
     * Enforce that an `img` element contains the `alt` attribute or
     * `role='presentation'` for a decorative image.
     */
    'react-a11y-img-has-alt': true,

    /**
     * For accessibility of your website, HTML elements must have a `lang`
     * attribute and the attribute must be a valid language code.
     */
    'react-a11y-lang': true,

    /**
     * For accessibility of your website, HTML meta elements must not have
     * `http-equiv="refresh"`.
     */
    'react-a11y-meta': true,

    /**
     * For accessibility of your website, enforce all `aria-*` attributes are
     * valid.
     *
     * Elements cannot use an invalid `aria-*` attribute. This rule will
     * fail if it finds an `aria-*` attribute that is not listed in WAI-ARIA
     * states and properties.
     */
    'react-a11y-props': true,

    /**
     * For accessibility of your website, enforce the type of aria state and
     * property values are correct.
     */
    'react-a11y-proptypes': true,

    /**
     * For accessibility of your website, elements with aria roles must have
     * all required attributes according to the role.
     */
    'react-a11y-role-has-required-aria-props': true,

    /**
     * For accessibility of your website, enforce that elements with explicit
     * or implicit roles defined contain only `aria-*` properties supported by
     * that `role`. Many aria attributes (states and properties) can only be
     * used on elements with particular roles. Some elements have implicit
     * roles, such as `<a href='hrefValue' />`, which will be resolved to
     * `role='link'`. A reference for the implicit roles can be found at
     * Default Implicit ARIA Semantics.
     */
    'react-a11y-role-supports-aria-props': true,

    /**
     * For accessibility of your website, elements with aria roles must use a
     * valid, non-abstract aria role. A reference to role defintions can be
     * found at WAI-ARIA roles.
     */
    'react-a11y-role': true,

    /**
     * For accessibility of your website, enforce tabindex value is not greater
     * than zero. Avoid positive tabindex attribute values to synchronize the
     * flow of the page with keyboard tab order.
     */
    'react-a11y-tabindex-no-positive': true,

    /**
     * For accessibility of your website, HTML title elements must not be
     * empty, must be more than one word, and must not be more than 60
     * characters long.
     */
    'react-a11y-titles': true,

    /**
     * For security reasons, anchor tags with `target="_blank"` should also
     * include `rel="noopener noreferrer"`. In order to restrict the behavior
     * `window.opener` access, the original page needs to add a
     * `rel="noopener"` attribute to any link that has `target="_blank"`.
     * However, Firefox does not support that tag, so you should actually use
     * `rel="noopener noreferrer"` for full coverage.
     */
    'react-anchor-blank-noopener': true,

    /**
     * React iframes must specify a sandbox attribute. If specified as an empty
     * string, this attribute enables extra restrictions on the content that
     * can appear in the inline frame. The value of the attribute can either be
     * an empty string (all the restrictions are applied), or a space-separated
     * list of tokens that lift particular restrictions. You many not use both
     * allow-scripts and allow-same-origin at the same time, as that allows the
     * embedded document to programmatically remove the sandbox attribute in
     * some scenarios.
     */
    'react-iframe-missing-sandbox': true,

    /**
     * Do not use React's `dangerouslySetInnerHTML` API. This rule finds usages
     * of the `dangerouslySetInnerHTML` API (but not any JSX references).
     */
    'react-no-dangerous-html': true,

    /**
     * Several errors can occur when using `React` and `React.Component`
     * subclasses. When using React components you must be careful to correctly
     * bind the `this` reference on any methods that you pass off to child
     * components as callbacks. For example, it is common to define a private
     * method called `onClick` and then specify `onClick={this.onClick}` as a
     * JSX attribute. If you do this then the `this` reference will be
     * undefined when your private method is invoked. The React documentation
     * suggests that you bind the `this` reference on all of your methods
     * within the constructor: `this.onClick = this.onClick.bind(this);`. This
     * rule will create a violation if
     * 1. A method reference is passed to a JSX attribute without being bound
     *    in the constructor.
     * 2. A method is bound multiple times in the constructor.
     * Another issue that can occur is binding the `this` reference to a
     * function within the `render()` method. For example, many people will
     * create an anonymous lambda within the JSX attribute to avoid the `this`
     * binding issue: `onClick={() => { this.onClick(); }}`. The problem with
     * this is that a new instance of an anonymous function is created every
     * time `render()` is invoked. When React compares virutal DOM properties
     * within `shouldComponentUpdate()` then the `onClick` property will look
     * like a new property and force a re-render. You should avoid this pattern
     * because creating function instances within `render` methods breaks any
     * logic within `shouldComponentUpdate()` methods. This rule creates
     * violations if
     * 1. An anonymous function is passed as a JSX attribute.
     * 2. If a function instantiated in local scope is passed as a JSX
     *    attribute.
     *
     * This rule can be configured via the "allow-anonymous-listeners"
     * parameter. If you want to suppress violations for the anonymous listener
     * scenarios then configure that rule like
     * this:
     * `"react-this-binding-issue": [true, {'allow-anonymous-listeners': true}]`
     */
    'react-this-binding-issue': true,

    /**
     * Remove unneeded properties defined in React Props and State interfaces.
     * Any interface named Props or State is defined as a React interface. All
     * fields in these interfaces must be referenced. This rule can be
     * configured with regexes to match custom Props and State interface names.
     */
    'react-unused-props-and-state': true,

    /**
     * Do not reference the arguments object by numerical index; instead, use a
     * named parameter.
     */
    'use-named-parameter': true,
};
