const isTest = String(process.env.NODE_ENV) === "test";
module.exports = {
  plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-optional-chaining",
  ],
  presets: [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      { modules: isTest ? "commonjs" : false, debug: true },
    ],
  ],
};
