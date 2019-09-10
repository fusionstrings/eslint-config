[![CircleCI](https://circleci.com/gh/comeon-stockholm/eslint-config.svg?style=svg)](https://circleci.com/gh/comeon-stockholm/eslint-config) [![Greenkeeper badge](https://badges.greenkeeper.io/comeon-stockholm/eslint-config.svg)](https://greenkeeper.io/)

# comeon eslint config

Combines eslint with prettier

## Uses

```js
	npm install --save-dev @comeon/eslint-config
```

or 

```js
	yarn add --dev @comeon/eslint-config
```

## Add to eslint config

```js
// .eslintrc.js
module.exports = {
	extends: ['@comeon']
}

```

## Customization 
https://eslint.org/docs/user-guide/configuring#configuring-rules

## Contribution
Raise a pull request

## Release

```sh
npm version <major> | <minor> | <patch>
git push --follow-tags
```
