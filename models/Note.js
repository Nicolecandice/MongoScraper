var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var noteSchema = new Schema({
  // `title` is of type String
  _headlineId: {
    type: Schema.Types.ObjectId,
    ref: "Headline"
  },
  // date is just a string
  date: {
    type: Date,
    default: Date.now
  },
  // as is the noteText
  noteText: String
});

// Create the Note model using the noteSchema
var Note = mongoose.model("Note", noteSchema);

// Export the Note model
module.exports = Note;
