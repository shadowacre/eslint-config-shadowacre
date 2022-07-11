## Installation

```
> yarn add eslint eslint-config-shadowacre --dev
```

## Configuration
Below are some example `.babelrc.js` files using the ShadowAcre eslint configuration as a base.
### Basic node.js project (with babel)

```js
/* eslint-env node */
module.exports = {
	root:    true,
	extends: "eslint-config-shadowacre/node"
}
```

### Basic nuxt.js project
```
module.exports = {
	root:    true,
	extends: "eslint-config-shadowacre/nuxt",
}
```

#### Recommended additional rules
```
	rules: {
		// error when attempting to use vue features that are not available in the projects version of vue:
		"vue/no-unsupported-features":     ["error", { version: "^2.6.14" }],

		// if we have no i18n we can disable this rule:
		"vue/no-bare-strings-in-template": "off",

		// if we have a custom button component we can enforce using it:
		"vue/no-restricted-html-elements": ["error", { element: "button", message: "Please us the custom <SimpleButton /> component" }],
	}
 ```
