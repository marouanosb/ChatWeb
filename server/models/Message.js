const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    content: String,
    sender: String,
    date: Date
})

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;
