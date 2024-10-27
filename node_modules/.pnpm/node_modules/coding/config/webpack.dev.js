const path = require("path");

module.exports = {
  mode: "development",
  entry: "../Index.tsx",
  output: {
    path: path.resolve(__dirname, "../dist"),
  },
};
