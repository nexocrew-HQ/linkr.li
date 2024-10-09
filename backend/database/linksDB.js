const { model, Schema } = require("mongoose");
const { String, Number } = require("../schemaArguments");

module.exports = model(
  "link",
  new Schema({
    UUID: String,
    UserID: String,
    Slug: String,
    Redirect: String,
  })
);
