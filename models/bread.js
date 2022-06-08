//require mongoose
const mongoose = require("mongoose");

//creating shorthand for the Schema constructor
const { Schema } = mongoose;

const breadSchema = new Schema({
  name: {type: String, required: true},
  hasGluten: Boolean,
  image: { type: String, default: 'https://as1.ftcdn.net/v2/jpg/01/31/65/76/1000_F_131657622_S5YkNeyUWFuiQfI64SHdQk7myctG8JgQ.jpg' },
  baker: {
    type: String,
    enum: ['Rachel', 'Monica', 'Josh', 'Chandelier', 'Ross', 'Phoede']
  }
});
//helper methods
breadSchema.methods.getBakedBy = function() {
  return `${this.name} was baked with love by ${this.baker}`
};
//model and export
const Bread = mongoose.model('Bread', breadSchema);

module.exports = Bread;