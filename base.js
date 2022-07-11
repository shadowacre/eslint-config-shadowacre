module.exports = {
	extends: "eslint:recommended",
	rules: {
		"indent":                           ["error", "tab", { SwitchCase: 1 }],
		"linebreak-style":                  ["error", "unix"],
		"quotes":                           ["error", "double"],
		"semi":                             ["error", "never"],
		"no-unused-vars":                   ["error", { args: "none", varsIgnorePattern: "^_" }],
		"no-constructor-return":            ["error"],
		"no-duplicate-imports":             ["error"],
		"no-self-compare":                  ["error"],
		"no-template-curly-in-string":      ["error"],
		"no-unmodified-loop-condition":     ["error"],
		"no-unreachable-loop":              ["error"],
		"no-unused-private-class-members":  ["error"],
		"no-use-before-define":             ["error"],
		"require-atomic-updates":           ["error"],
		"accessor-pairs":                   ["error"],
		"no-var":                           ["error"],
		"camelcase":                        ["error", { properties: "always", ignoreDestructuring: true }],
		"class-methods-use-this":           ["error"],
		"complexity":                       ["error", { max: 6 }],
		"consistent-return":                ["error"],
		"curly":                            ["error", "multi-or-nest"],
		"default-case":                     ["error"],
		"default-case-last":                ["error"],
		"default-param-last":               ["error"],
		"dot-notation":                     ["error", { allowKeywords: true, allowPattern: "^[a-z]+(_[a-z]+)+$" }],
		"func-style":                       ["error", "expression"],
		"grouped-accessor-pairs":           ["error"],
		"max-depth":                        ["error", { max: 4 }],
		"init-declarations":                ["error"],
		"max-classes-per-file":             ["error", 1],
		"max-lines":                        ["error", { max: 500, skipBlankLines: true, skipComments: true }],
		"max-lines-per-function":           ["error", { max: 50, skipBlankLines: true, skipComments: true }],
		"max-nested-callbacks":             ["error", { max: 2 }],
		"max-params":                       ["error", { max: 10 }],
		"max-statements":                   ["error", { max: 10 }],
		"multiline-comment-style":          ["error", "starred-block"],
		"new-cap":                          ["error"],
		"no-alert":                         ["error"],
		"no-array-constructor":             ["error"],
		"no-bitwise":                       ["error", { int32Hint: true }],
		"no-caller":                        ["error"],
		"no-case-declarations":             ["error"],
		"no-console":                       ["warn"],
		"no-delete-var":                    ["error"],
		"no-else-return":                   ["error"],
		"no-empty":                         ["error"],
		"no-empty-function":                ["error"],
		"no-eq-null":                       ["error"],
		"no-eval":                          ["error"],
		"no-extend-native":                 ["error"],
		"no-extra-bind":                    ["error"],
		"no-extra-boolean-cast":            ["error"],
		"no-labels":                        ["error"],
		"no-extra-semi":                    ["error"],
		"no-floating-decimal":              ["error"],
		"no-global-assign":                 ["error"],
		"no-implicit-coercion":             ["error"],
		"no-implicit-globals":              ["error"],
		"no-implied-eval":                  ["error"],
		"no-invalid-this":                  ["error"],
		"no-iterator":                      ["error"],
		"no-lone-blocks":                   ["error"],
		"no-lonely-if":                     ["error"],
		"no-loop-func":                     ["error"],
		"no-mixed-operators":               ["error"],
		"no-multi-assign":                  ["error"],
		"no-multi-str":                     ["error"],
		"no-negated-condition":             ["error"],
		"no-nested-ternary":                ["error"],
		"no-new":                           ["error"],
		"no-new-object":                    ["error"],
		"no-new-func":                      ["error"],
		"no-new-wrappers":                  ["error"],
		"no-nonoctal-decimal-escape":       ["error"],
		"no-octal":                         ["error"],
		"no-octal-escape":                  ["error"],
		"no-param-reassign":                ["error"],
		"no-plusplus":                      ["error", { allowForLoopAfterthoughts: true }],
		"no-proto":                         ["error"],
		"no-regex-spaces":                  ["error"],
		"no-return-assign":                 ["error"],
		"no-script-url":                    ["error"],
		"no-sequences":                     ["error"],
		"no-shadow":                        ["error"],
		"no-shadow-restricted-names":       ["error"],
		"no-throw-literal":                 ["error"],
		"no-unneeded-ternary":              ["error"],
		"no-unused-expressions":            ["error"],
		"no-useless-call":                  ["error"],
		"no-useless-catch":                 ["error"],
		"no-useless-computed-key":          ["error"],
		"no-useless-concat":                ["error"],
		"no-useless-constructor":           ["error"],
		"no-useless-escape":                ["error"],
		"no-useless-rename":                ["error"],
		"no-useless-return":                ["error"],
		"no-void":                          ["error"],
		"no-warning-comments":              ["warn", { terms: ["todo", "fixme"] }],
		"no-with":                          ["error"],
		"object-shorthand":                 ["error"],
		"one-var":                          ["error", "never"],
		"prefer-arrow-callback":            ["error"],
		"prefer-const":                     ["error"],
		"prefer-exponentiation-operator":   ["error"],
		"prefer-named-capture-group":       ["warn"],
		"prefer-numeric-literals":          ["error"],
		"prefer-object-has-own":            ["error"],
		"prefer-object-spread":             ["error"],
		"prefer-promise-reject-errors":     ["error", { allowEmptyReject: true }],
		"prefer-regex-literals":            ["error"],
		"prefer-rest-params":               ["error"],
		"prefer-spread":                    ["error"],
		"prefer-template":                  ["error"],
		"quote-props":                      ["error", "consistent-as-needed"],
		"radix":                            ["error"],
		"require-unicode-regexp":           ["error"],
		"strict":                           ["error"],
		"symbol-description":               ["error"],
		"yoda":                             ["error", "never"],
		"arrow-parens":                     ["error"],
		"arrow-spacing":                    ["error"],
		"block-spacing":                    ["error"],
		"brace-style":                      ["error", "1tbs", { allowSingleLine: true }],
		"comma-dangle":                     ["error", "only-multiline"],
		"comma-spacing":                    ["error"],
		"comma-style":                      ["error", "last"],
		"computed-property-spacing":        ["error"],
		"dot-location":                     ["error", "property"],
		"eol-last":                         ["error"],
		"func-call-spacing":                ["error"],
		"function-call-argument-newline":   ["error", "consistent"],
		"generator-star-spacing":           ["error", { before: false, after: true }],
		"implicit-arrow-linebreak":         ["error", "beside"],
		"key-spacing":                      ["error", { align: "value" }],
		"lines-between-class-members":      ["error", "always"],
		"max-len":                          ["error", { code: 140, tabWidth: 4, ignoreComments: true }],
		"max-statements-per-line":          ["error", { max: 1 }],
		"new-parens":                       ["error"],
		"no-extra-parens":                  ["error"],
		"no-mixed-spaces-and-tabs":         ["error", "smart-tabs"],
		"no-multiple-empty-lines":          ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],
		"no-trailing-spaces":               ["error"],
		"no-whitespace-before-property":    ["error"],
		"nonblock-statement-body-position": ["error", "below"],
		"object-curly-spacing":             ["error", "always"],
		"operator-linebreak":               ["error", "before"],
		"padded-blocks":                    ["error", { blocks: "never", classes: "always", switches: "never" }],
		"rest-spread-spacing":              ["error", "never"],
		"semi-spacing":                     ["error", { before: false, after: true }],
		"space-before-function-paren":      ["error", { anonymous: "never", named: "never", asyncArrow: "always" }],
		"space-in-parens":                  ["error", "never"],
		"space-infix-ops":                  ["error"],
		"switch-colon-spacing":             ["error", { after: true, before: false }],
		"template-curly-spacing":           ["error", "never"],
		"template-tag-spacing":             ["error", "never"],
		"wrap-iife":                        ["error", "outside"],
		"yield-star-spacing":               ["error", "after"],
		"no-multi-spaces":                  ["error", {
			exceptions: { VariableDeclarator: true, ImportDeclaration: true }
		}],
	},
}
