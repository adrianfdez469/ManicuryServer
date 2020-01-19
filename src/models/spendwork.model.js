const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Spendworkchema = new Schema({
    spendamount: {
        type: Number,
        required: true
    },
    spendtype: {
        type: String,
        required: true
    }
}, {
    timestamps: {createdAt: 'date', updatedAt: false}
});

module.exports = mongoose.model('Spendwork', Spendworkchema);