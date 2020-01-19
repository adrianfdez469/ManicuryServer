const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkType = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    }
});

module.exports = mongoose.model('Worktype', WorkType);