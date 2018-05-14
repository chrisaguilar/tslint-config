module.exports = {
    /**
     * Enforces a consistent style for multiline JSX elements which promotes
     * ease of editing via line-wise manipulations as well as maintainabilty
     * via small diffs when changes are made.
     *
     * ```
     * // Good:
     * const element = <div
     *      className="foo"
     *      tabIndex={1}
     * >
     *     {children}
     * </div>;
     *
     * // Also Good:
     * <Button
     *     appearance="pretty"
     *     disabled
     *     label="Click Me"
     *     size={size}
     * />
     * ```
     */
    'jsx-alignment': true,

    /**
     * Allows blacklisting of JSX elements with an optional explanatory message
     * in the reported failure.
     */
    'jsx-ban-elements': false,

    /**
     * Allows blacklisting of props in JSX with an optional explanatory message
     * in the reported failure.
     */
    'jsx-ban-props': false,

    /**
     * When using a boolean attribute in JSX, you can set the attribute value
     * to true or omit the value. This rule will enforce one or the other to
     * keep consistency in your code.
     *
     * Options: ["always", "never"]
     * Default: always
     */
    'jsx-boolean-value': [true, 'always'],

    /**
     * Requires or bans spaces between curly brace characters in JSX.
     *
     * Options: ["always", "never"]
     */
    'jsx-curly-spacing': [true, 'never'],

    /**
     * Requires or bans spaces before and after the = token in JSX element
     * attributes.
     *
     * Options: ["always", "never"]
     */
    'jsx-equals-spacing': [true, 'never'],

    /**
     * Warns for missing key props in JSX element array literals and inside
     * return statements of Array.prototype.map callbacks.
     *
     * N.B. This rule only does a simple check for .map(...) syntax and does
     * not inspect computed types of expressions. As such, it may produce false
     * positives if you use APIs that look similar to .map().
     */
    'jsx-key': true,

    /**
     * Forbids function binding in JSX attributes. This has the same intent as
     * jsx-no-lambda in helping you avoid excessive re-renders.
     *
     * Note that this currently only does a simple syntactic check, not a
     * semantic one (it doesn't use the type checker). So it may have some rare
     * false positives if you define your own .bind function and supply this as
     * a parameter.
     */
    'jsx-no-bind': true,

    /**
     * Creating new anonymous functions (with either the function syntax or
     * ES2015 arrow syntax) inside the render call stack works against pure
     * component rendering. When doing an equality check between two lambdas,
     * React will always consider them unequal values and force the component
     * to re-render more often than necessary.
     */
    'jsx-no-lambda': true,

    /**
     * Disallows multiline JS expressions inside JSX blocks to promote
     * readability
     */
    'jsx-no-multiline-js': false,

    /**
     * Passing strings to the ref prop of React elements is considered a legacy
     * feature and will soon be deprecated. Instead, use a callback.
     */
    'jsx-no-string-ref': true,

    /**
     * Enforces that JSX elements with no children are self-closing.
     *
     * ```
     * // bad
     * <div className="foo"></div>
     *
     * // good
     * <div className="foo" />
     * ```
     */
    'jsx-self-close': true,

    /**
     * Checks that self-closing JSX elements have a space before the `/>` part.
     */
    'jsx-space-before-trailing-slash': true,

    /**
     * Enforces use of a translation function. Plain string literals are
     * disallowed in JSX when enabled.
     *
     * Default: off
     */
    'jsx-use-translation-function': false,

    /**
     * Enforces that multiline JSX expressions are wrapped with parentheses.
     *
     * Opening parenthesis must be followed by a newline.
     * Closing parenthesis must be followed by a newline.
     *
     * ```
     * // bad
     * const button = <button type="submit">
     *     Submit
     * </button>;
     *
     * // good
     * const button = (
     *     <button type="submit">
     *         Submit
     *     </button>
     * );
     * ```
     */
    'jsx-wrap-multiline': true
};
