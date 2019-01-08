const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema({
	text: {
    type: String,
    required: true
  },
  completed: {
  	type: Boolean
  }
});

module.exports = mongoose.model("Data", DataSchema);