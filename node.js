module.exports = {
	extends: "eslint-config-shadowacre/base",
	env:     {
		es2021: true,
		node:   true,
	},
	parser:        "@babel/eslint-parser",
	parserOptions: {
		sourceType:        "module",
		requireConfigFile: false,
	},
	plugins: [
		"eslint-plugin-node",
	],
	rules: {
		// Possible Errors
		"node/handle-callback-err":                   ["error"],
		"node/no-callback-literal":                   ["error"],
		"node/no-exports-assign":                     ["error"],
		"node/no-extraneous-import":                  ["error"],
		"node/no-extraneous-require":                 ["error"],
		"node/no-new-require":                        ["error"],
		"node/no-path-concat":                        ["error"],
		"node/no-process-exit":                       ["error"],
		"node/no-unsupported-features/node-builtins": ["error"],
		"node/process-exit-as-throw":                 ["error"],
		"node/shebang":                               ["error"],

		// Best Practices
		"node/no-deprecated-api": ["error"],

		// Stylistic Issues
		"node/callback-return":                 ["error"],
		"node/exports-style":                   ["error"],
		"node/file-extension-in-import":        ["error", "never", { ".js": "never", ".cjs": "never", ".mjs": "never", ".json": "never" }],
		"node/global-require":                  ["error"],
		"node/no-process-env":                  ["error"],
		"node/no-sync":                         ["error"],
		"node/prefer-global/buffer":            ["error"],
		"node/prefer-global/console":           ["error"],
		"node/prefer-global/process":           ["error"],
		"node/prefer-global/text-decoder":      ["error"],
		"node/prefer-global/text-encoder":      ["error"],
		"node/prefer-global/url-search-params": ["error"],
		"node/prefer-global/url":               ["error"],
		"node/prefer-promises/dns":             ["error"],
		"node/prefer-promises/fs":              ["error"],
	}
}
