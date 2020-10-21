const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;
const NewPostSchema = new Schema({
    description: String,
    reward: String,
    quest: String,
    num: String,
    date: {
        type: String,
        default: Date.now()
    }
});

//Model
const NewPost = mongoose.model('NewPost', NewPostSchema);

module.exports = NewPost;