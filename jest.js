module.exports = {
	plugins: [
		"istanbul"
	],
	rules: {
		"istanbul/no-ignore-file": ["error"],
		"istanbul/prefer-ignore-reason": ["error"]
	},
	overrides: [
		{
			extends: "plugin:jest/recommended",
			files: [
				"tests/**",
			],
			plugins: [
				"jest"
			],
			rules: {
				"jest/consistent-test-it": ["error", { fn: "it" }],
				"jest/expect-expect": ["error", { assertFunctionNames: ["expect", "satisfy"] }],
				"jest/max-nested-describe": ["error", { max: 3 }],
				"jest/no-alias-methods": ["error"],
				"jest/no-commented-out-tests": ["error"],
				"jest/no-conditional-expect": ["error"],
				"jest/no-conditional-in-test": ["error"],
				"jest/no-deprecated-functions": ["error"],
				"jest/no-disabled-tests": ["error"],
				"jest/no-done-callback": ["error"],
				"jest/no-duplicate-hooks": ["error"],
				"jest/no-export": ["error"],
				"jest/no-focused-tests": ["error"],
				"jest/no-identical-title": ["error"],
				"jest/no-jasmine-globals": ["error"],
				"jest/no-jest-import": ["error"],
				"jest/no-large-snapshots": ["error"],
				"jest/no-mocks-import": ["error"],
				"jest/no-standalone-expect": ["error"],
				"jest/no-test-prefixes": ["error"],
				"jest/no-test-return-statement": ["error"],
				"jest/prefer-called-with": ["error"],
				"jest/prefer-comparison-matcher": ["error"],
				"jest/prefer-equality-matcher": ["error"],
				"jest/prefer-expect-resolves": ["error"],
				"jest/prefer-hooks-in-order": ["error"],
				"jest/prefer-hooks-on-top": ["error"],
				"jest/prefer-lowercase-title": ["error"],
				"jest/refer-snapshot-hint": ["error"],
				"jest/prefer-spy-on": ["error"],
				"jest/prefer-strict-equal": ["error"],
				"jest/prefer-to-be": ["error"],
				"jest/prefer-to-contain": ["error"],
				"jest/prefer-to-have-length": ["error"],
				"jest/prefer-todo": ["error"],
				"jest/require-hook": ["error"],
				"jest/require-to-throw-message": ["error"],
				"jest/require-top-level-describe": ["error"],
				"jest/valid-describe-callback": ["error"],
				"jest/valid-expect": ["error"],
				"jest/valid-expect-in-promise": ["error"],
				"jest/valid-title": ["error"],
			}
		}
	]
}