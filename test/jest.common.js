const path = require("path");

module.exports = {
  rootDir: path.join(__dirname, ".."),
  watchPlugins: [
    "jest-watch-select-projects",
    "jest-watch-typeahead/testname",
    "jest-watch-typeahead/filename",
  ],
};
