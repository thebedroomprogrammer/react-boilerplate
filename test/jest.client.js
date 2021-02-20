module.exports = {
  ...require("./jest.common"),
  displayName: "client",
  testEnvironment: "jest-environment-jsdom",
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  snapshotSerializers: ["@emotion/jest/serializer"],
};
