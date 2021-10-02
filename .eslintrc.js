module.exports = {
    root: true,
    extends: [
        "eslint:recommended"
    ],
    env: {
        "node": true,
        "jest": true,
        "es6": true
    },
    rules: {
        // console.log()
        "semi": "error",

        // const obj = {
        //     prop1: "",
        //     prop2: "",
        // }
        "comma-dangle": "warn",

        // const constant = 4;
        "no-unused-vars": "warn",

        //
        //
        //
        "no-multiple-empty-lines": "warn",

        // export default HomePage;
        "eol-last": "warn",

        // self explanatory.
        "no-trailing-spaces": "warn",

        // warn if wrong indent.
        "indent": ["warn", 4, {
            "SwitchCase": 1
        }],

        // const str = 'Hello World';
        "quotes": ["error", "double"],

        // <Button title='Hello World' />
        "jsx-quotes": ["error", "prefer-double"],

        // function fn() {
        //
        // }
        "no-empty-function": "warn"
    },
    ignorePatterns: [
        "/node_modules",
        "/dist",
        "/entities"
    ],
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                project: "tsconfig.json"
            },
            extends: [
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended"
            ],
            rules: {
                // let obj: any;
                "@typescript-eslint/no-explicit-any": "off",

                // let obj = { count: 5 }
                "prefer-const": "off",

                // function fn() {
                //     return "Hello World";
                // }
                "@typescript-eslint/explicit-function-return-type": "off",
                "@typescript-eslint/explicit-module-boundary-types": "off",

                // interface Iinterface {
                //     name: string
                //     price: number
                // }
                "@typescript-eslint/member-delimiter-style": ["error", {
                    "multiline": {
                        "delimiter": "semi",
                        "requireLast": true
                    },
                    "singleline": {
                        "delimiter": "semi",
                        "requireLast": true
                    },
                    "multilineDetection": "brackets"
                }],

                // Dont forget to disable eslint rules before typescript rules.
                // function fn() {
                //
                // }
                "no-empty-function": "off",
                "@typescript-eslint/no-empty-function": "warn",

                // type str = string
                "semi": "off",
                "@typescript-eslint/semi": "error"
            }
        }
    ]
};
