const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Field ini harus diisi!'],
    minLength: [4, 'Nama harus diisi minimal 4 karakter!']
  },
  title: {
    type: String,
    required: [true, 'Field ini harus diisi!'],
    minLength: [4, 'Title ini harus disini minimal 4 karakter'],
  },
  description: {
    type: String,
    required: [true, 'Field ini harus'],
  },
});

module.exports = mongoose.model("Tour", tourSchema);