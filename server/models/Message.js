const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    content: String,
    sender: String,
    date: Date
})

const User = mongoose.model('User', userSchema);

module.exports = User;