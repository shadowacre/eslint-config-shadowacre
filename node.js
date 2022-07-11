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
}
