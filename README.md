## Installation
The simplest way to install is to simply run the npx command below. This command will automatically detect and use yarn if available.
```bash
> npx install-peerdeps --dev eslint-config-shadowacre
```
You can manually install the `eslint-config-shadowacre` package, but you'll have to install peer dependencies manually too.

## Configuration
Below are some example `.babelrc.js` files using the ShadowAcre eslint configuration as a base.

### Basic node.js project (with babel)

```js
/* eslint-env node */
module.exports = {
	root:    true,
	extends: "eslint-config-shadowacre/node",
}
```

---

### Basic nuxt.js project
```js
/* eslint-env node */
module.exports = {
	root:    true,
	extends: "eslint-config-shadowacre/nuxt",
}
```

#### Recommended additional rules
```js
{
	rules: {
		// error when attempting to use vue features that are not available in the projects version of vue:
		"vue/no-unsupported-features":     ["error", { version: "^2.6.14" }],

		// if we have no i18n we can disable this rule:
		"vue/no-bare-strings-in-template": "off",

		// if we have a custom button component we can enforce using it:
		"vue/no-restricted-html-elements": ["error", { element: "button", message: "Please us the custom <SimpleButton /> component" }],
	}
}
```

---

### Jest config, extending project config
```js
/* eslint-env node */
module.exports = {
	extends: [
		"../.eslintrc.js"
		"eslint-config-shadowacre/jest",
	],
}
```