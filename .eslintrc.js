module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
        "worker": true,
        "jest": true,
        "serviceworker": true,
        "nashorn": true
    },
    "extends": ["eslint:recommended", "plugin:prettier/recommended"],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2018,
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "func-style": "off"
    }
};