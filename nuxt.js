module.exports = {
	extends: [
		"plugin:nuxt/recommended",
		"eslint-config-shadowacre/base",
	],
	env: {
		es2021:  true,
		node:    true,
		browser: true,
	},
	parser:        "vue-eslint-parser",
	parserOptions: {
		parser:            "@babel/eslint-parser",
		sourceType:        "module",
		requireConfigFile: false,
	},
	rules: {
		"import/no-nodejs-modules":     ["error"],
		"nuxt/no-env-in-context":       ["error"],
		"nuxt/no-env-in-hooks":         ["error"],
		"nuxt/no-globals-in-created":   ["error"],
		"nuxt/no-cjs-in-config":        ["error"],
		"nuxt/no-timing-in-fetch-data": ["error"],
		"nuxt/require-func-head":       ["error"],
	},
	overrides: [
		{
			extends: "plugin:vue/recommended",
			files: [
				"pages/**/*.{js,ts,vue}",
				"layouts/**/*.{js,ts,vue}",
				"components/**/*.{js,ts,vue}",
				"store/**/*.{js,ts,vue}",
				"app.{js,ts,vue}",
				"error.{js,ts,vue}",
			],
			plugins: [
				"vue",
			],
			rules: {
				// Priority A: Essential
				"vue/multi-word-component-names":             "off",
				"vue/no-arrow-functions-in-watch":            ["error"],
				"vue/no-async-in-computed-properties":        ["error"],
				"vue/no-child-content":                       ["error"],
				"vue/no-computed-properties-in-data":         ["error"],
				"vue/no-dupe-keys":                           ["error"],
				"vue/no-dupe-v-else-if":                      ["error"],
				"vue/no-duplicate-attributes":                ["error"],
				"vue/no-export-in-script-setup":              ["error"],
				"vue/no-mutating-props":                      ["error"],
				"vue/no-parsing-error":                       ["error"],
				"vue/no-ref-as-operand":                      ["error"],
				"vue/no-reserved-component-names":            ["error"],
				"vue/no-reserved-keys":                       ["error"],
				"vue/no-reserved-props":                      ["error"],
				"vue/no-setup-props-destructure":             ["error"],
				"vue/no-shared-component-data":               ["error"],
				"vue/no-side-effects-in-computed-properties": ["error"],
				"vue/no-template-key":                        ["error"],
				"vue/no-textarea-mustache":                   ["error"],
				"vue/no-unused-components":                   ["error"],
				"vue/no-unused-vars":                         ["error", { ignorePattern: "^_" }],
				"vue/no-use-computed-property-like-method":   ["error"],
				"vue/no-use-v-if-with-v-for":                 ["error"],
				"vue/no-useless-template-attributes":         ["error"],
				"vue/no-v-text-v-html-on-component":          ["error"],
				"vue/require-component-is":                   ["error"],
				"vue/require-prop-type-constructor":          ["error"],
				"vue/require-render-return":                  ["error"],
				"vue/require-v-for-key":                      ["error"],
				"vue/require-valid-default-prop":             ["error"],
				"vue/return-in-computed-property":            ["error"],
				"vue/return-in-emits-validator":              ["error"],
				"vue/use-v-on-exact":                         ["error"],
				"vue/valid-define-emits":                     ["error"],
				"vue/valid-define-props":                     ["error"],
				"vue/valid-next-tick":                        ["error"],
				"vue/valid-template-root":                    ["error"],
				"vue/valid-v-bind":                           ["error"],
				"vue/valid-v-cloak":                          ["error"],
				"vue/valid-v-else-if":                        ["error"],
				"vue/valid-v-else":                           ["error"],
				"vue/valid-v-for":                            ["error"],
				"vue/valid-v-html":                           ["error"],
				"vue/valid-v-if":                             ["error"],
				"vue/valid-v-model":                          ["error"],
				"vue/valid-v-on":                             ["error"],
				"vue/valid-v-once":                           ["error"],
				"vue/valid-v-pre":                            ["error"],
				"vue/valid-v-show":                           ["error"],
				"vue/valid-v-slot":                           ["error"],
				"vue/valid-v-text":                           ["error"],
		
				// Priority A: Essential for Vue.js 2.x
				"vue/no-custom-modifiers-on-v-model": ["error"],
				"vue/no-multiple-template-root":      ["error"],
				"vue/no-v-for-template-key":          ["error"],
				"vue/no-v-model-argument":            ["error"],
				"vue/valid-v-bind-sync":              ["error"],
		
				// Priority B: Strongly Recommended
				"vue/attribute-hyphenation":                     ["error", "always"],
				"vue/component-definition-name-casing":          ["error"],
				"vue/first-attribute-linebreak":                 ["error", { singleline: "beside", multiline: "below" }],
				"vue/html-closing-bracket-newline":              ["error"],
				"vue/html-closing-bracket-spacing":              ["error"],
				"vue/html-end-tags":                             ["error"],
				"vue/html-indent":                               ["error", "tab"],
				"vue/html-quotes":                               ["error", "double"],
				"vue/html-self-closing":                         ["error", { html: { component: "always", void: "always", normal: "never" } }],
				"vue/max-attributes-per-line":                   ["error", { singleline: 3, multiline: 1 }],
				"vue/multiline-html-element-content-newline":    ["error"],
				"vue/mustache-interpolation-spacing":            ["error", "always"],
				"vue/no-multi-spaces":                           ["error", { ignoreProperties: true }],
				"vue/no-spaces-around-equal-signs-in-attribute": ["error"],
				"vue/no-template-shadow":                        ["error"],
				"vue/one-component-per-file":                    ["error"],
				"vue/prop-name-casing":                          ["error"],
				"vue/require-default-prop":                      ["error"],
				"vue/require-prop-types":                        "off",
				"vue/singleline-html-element-content-newline":   "off",
				"vue/v-bind-style":                              ["error", "shorthand"],
				"vue/v-on-style":                                ["error", "shorthand"],
				"vue/v-slot-style":                              ["error", "shorthand"],
		
				// Priority C: Recommended
				"vue/attributes-order":      ["error"],
				"vue/component-tags-order":  ["error", { order: ["documentation", "template", "script", "style"] }],
				"vue/no-lone-template":      ["error"],
				"vue/no-multiple-slot-args": ["error"],
				"vue/no-v-html":             ["error"],
				"vue/order-in-components":   ["error"],
				"vue/this-in-template":      ["error"],
		
				// Uncategorized
				"vue/block-lang":                         ["error", { script: { lang: "js" }, style: { lang: "less" } }],
				"vue/block-tag-newline":                  ["error"],
				"vue/component-name-in-template-casing":  ["error", "kebab-case"],
				"vue/component-options-name-casing":      ["error", "PascalCase"],
				"vue/custom-event-name-casing":           ["error", "camelCase"],
				"vue/html-button-has-type":               ["error"],
				"vue/html-comment-content-newline":       ["error"],
				"vue/html-comment-content-spacing":       ["error"],
				"vue/html-comment-indent":                ["error", "tab"],
				"vue/match-component-import-name":        ["error"],
				"vue/next-tick-style":                    ["error"],
				"vue/no-bare-strings-in-template":        ["warn"],
				"vue/no-boolean-default":                 ["error"],
				"vue/no-duplicate-attr-inheritance":      ["error"],
				"vue/no-empty-component-block":           ["error"],
				"vue/no-multiple-objects-in-class":       ["error"],
				"vue/no-potential-component-option-typo": ["error"],
				"vue/no-static-inline-styles":            ["error"],
				"vue/no-template-target-blank":           ["error"],
				"vue/no-this-in-before-route-enter":      ["error"],
				"vue/no-undef-properties":                ["error"],
				"vue/no-unused-properties":               ["error"],
				"vue/no-unused-refs":                     ["error"],
				"vue/no-useless-mustaches":               ["error"],
				"vue/no-useless-v-bind":                  ["error"],
				"vue/no-v-text":                          ["error"],
				"vue/padding-line-between-blocks":        ["error"],
				"vue/prefer-prop-type-boolean-first":     ["error"],
				"vue/prefer-separate-static-class":	      ["error"],
				"vue/require-direct-export":              ["error"],
				"vue/require-name-property":              ["error"],
				"vue/script-indent":                      ["error", "tab", { baseIndent: 0 }],
				"vue/v-on-function-call":                 ["error"],
				"vue/arrow-spacing":                      ["error"],
				"vue/block-spacing":                      ["error"],
				"vue/brace-style":                        ["error", "1tbs", { allowSingleLine: true }],
				"vue/camelcase":                          ["error", { properties: "always", ignoreDestructuring: true }],
				"vue/comma-dangle":                       ["error", "only-multiline"],
				"vue/comma-spacing":                      ["error"],
				"vue/comma-style":                        ["error", "last"],
				"vue/dot-location":                       ["error", "property"],
				"vue/func-call-spacing":                  ["error"],
				"vue/key-spacing":                        ["error", { align: "value" }],
				"vue/max-len":                            ["error", { code: 140, tabWidth: 4, ignoreComments: true }],
				"vue/no-extra-parens":                    ["error"],
				"vue/object-curly-spacing":               ["error", "always"],
				"vue/object-shorthand":                   ["error"],
				"vue/operator-linebreak":                 ["error", "before"],
				"vue/prefer-template":                    ["error"],
				"vue/quote-props":                        ["error", "consistent-as-needed"],
				"vue/space-in-parens":                    ["error", "never"],
				"vue/space-infix-ops":                    ["error"],
				"vue/template-curly-spacing":             ["error", "never"],
			}
		}
	],
}
