module.exports = {
  ...require("./jest.common"),
  displayName: "client",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },

  modulePathIgnorePatterns: ["<rootDir>/dist/","<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  snapshotSerializers: ["@emotion/jest/serializer"],
};
