module.exports = {
    collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
    coverageDirectory: "coverage",
    coverageProvider: "babel",

    //   moduleNameMapper: {},
    roots: ["<rootDir>/src", "<rootDir>/tests"],

    transform: {
        "\\.ts$": "ts-jest",
    },
};
