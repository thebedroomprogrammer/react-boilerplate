module.exports = {
  ...require("./test/jest.common"),

  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],

  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  // coverageThreshold: {
  //     global: {
  //         statements: 15,
  //         branches: 10,
  //         functions: 15,
  //         lines: 15,
  //     },
  // },
  testEnvironment: "jest-environment-jsdom",

  collectCoverageFrom: [
    "**/src/**.ts",
    "**/src/**.tsx",
    "!**/dist/**",
    "!**/__tests__/**",
    "!**/node_modules/**",
  ],
  // projects: ["./test/jest.client.js","./test/jest.lint.js"],
  projects: ["./test/jest.client.js"],

};
