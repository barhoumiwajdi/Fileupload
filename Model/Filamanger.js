const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    name: String,
    path: String,
    size: Number,
    date: Date
    // Add more fields as needed
});

const File = mongoose.model('File', fileSchema);
module.exports = File;