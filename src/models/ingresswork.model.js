const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngressworkSchema = new Schema({
    ingressAmount: {
        type: Number,
        required: true,
        min: 0
    },
    tip: {
        type: Number,
        required: true,
        default: 0,
        min: 0
    },
    client: {
        clientId: {
            type: Schema.Types.ObjectId,
            ref: 'Client'
        },
        name: String
    },
    workType: {
        worktypeId: {
            type: Schema.Types.ObjectId,
            ref: 'Worktype',
            required: true
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }    
}, {
    timestamps: {createdAt: 'date', updatedAt: false}
});

module.exports = mongoose.model('Ingresswork', IngressworkSchema);