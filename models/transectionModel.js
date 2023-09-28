const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

// Define a schema for the transactions collection
const transactionSchema = new mongoose.Schema({
    transectionid:Number,    
    amount: {
        type: Number,
        required: [true, 'Amount is required'],
    },
    type: {
        type: String,
        required: [true, "Type is required"],
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    date: {
        type: Date,
        required: [true, 'Date is required'],
    },
});

// Add a field for the auto-incrementing ID using mongoose-sequence

trans = async() => {(AutoIncrement, { inc_field: 'transectionid' });}

transactionSchema.plugin.trans

// Create the Transaction model
const Transection = mongoose.model('Transection', transactionSchema);

module.exports = Transection;
