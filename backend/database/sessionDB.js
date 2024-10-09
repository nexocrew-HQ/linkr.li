const { model, Schema } = require("mongoose");
const { String, Number } = require("../schemaArguments");

module.exports = model(
  "sesson",
  new Schema({
    UUID: String,
    UserID: String,
    CreatedAt: Number,
  })
);
