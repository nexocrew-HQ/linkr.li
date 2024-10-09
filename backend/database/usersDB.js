const { model, Schema } = require("mongoose");
const { String, Number } = require("../schemaArguments");

module.exports = model(
  "user",
  new Schema({
    UUID: String,
    UserID: String,
    Email: String,
    Links: [String],
  })
);
