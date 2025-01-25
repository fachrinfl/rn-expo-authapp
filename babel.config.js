module.exports = {
  presets: ["babel-preset-expo", "@babel/preset-typescript"],
  plugins: [
    ["@babel/plugin-transform-runtime", { regenerator: true }],
    ["@babel/plugin-transform-private-methods", { loose: true }],
    ["@babel/plugin-transform-private-property-in-object", { loose: true }],
    ["@babel/plugin-transform-class-properties", { loose: true }],
  ],
};
