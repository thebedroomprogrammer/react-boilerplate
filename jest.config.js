module.exports = {
  ...require("./test/jest.common"),
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  // coverageThreshold: {
  //     global: {
  //         statements: 15,
  //         branches: 10,
  //         functions: 15,
  //         lines: 15,
  //     },
  // },

  collectCoverageFrom: [
    "**/src/**.ts",
    "**/src/**.tsx",
    "!**/dist/**",
    "!**/__tests__/**",
    "!**/node_modules/**",
  ],
  projects: ["./test/jest.client.js"],
};
