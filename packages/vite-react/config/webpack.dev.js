const path = require("path");

module.exports = {
  mode: "development",
  entry: "../index.tsx",
  output: {
    path: path.resolve(__dirname, "../dist"),
  },
};
