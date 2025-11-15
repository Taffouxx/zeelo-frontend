module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "preact",
        "plugin:@typescript-eslint/recommended"
    ],
    ignorePatterns: [
        "build/",
        "dist/",
        "node_modules/",
        "external/**",
        "*.config.js",
        "*.config.ts"
    ],
    rules: {
        "radix": "off",
        "no-spaced-func": "off",
        "react/no-danger": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                "varsIgnorePattern": "^_"
            }
        ],
        "no-unused-vars": [
            "warn",
            {
                "varsIgnorePattern": "^_"
            }
        ],
        "react/jsx-no-literals": "warn",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-explicit-any": "off"
    }
};

