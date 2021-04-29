const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    owner: { type: Types.ObjectId, ref: 'User'},
    completed: false,
    importanted: false,
    date: { type: Date, default: Date.now},
});

module.exports = model('Todo', schema);