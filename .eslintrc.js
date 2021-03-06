module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "env": {
        "browser": true,
        "node": true,
        "jquery": true
    },
    "rules": {
        "quotes": 0,
        "no-trailing-spaces": 0,
        "eol-last": 0,
        "no-unused-vars": 0,
        "no-underscore-dangle": 0,
        "no-alert": 0,
        "no-lone-blocks": 1,
        "camelcase": 0
    },
    "globals": {
        "jQuery": true,
        "$": true
    }
    // "parserOptions": {
    //     "sourceType": "module",
    //     "ecmaVersion": {
    //         "jsx": true,
    //         "modules": true,
    //         "experimentalObjectRestSpread": true
    //     }
    // }
};