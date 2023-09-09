const { default: mongoose, trusted } = require("mongoose")
const feeSchema = new mongoose.Schema({
    // months:{
    //     type:String,
    //     enum : ["January", "Feburary", "March","April", "May", "June", "July", "August", "September", "October","November", "December"]
    // },

    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    amount: {
        type: Number,
        required: true
    },
    rollNumber: {
        type: Number,
        required: true
    },
    mode: {
        type: String,
        enum : ["Credit", "Debit", "UPI", "Netbanking", "Cash"],
        required: true
    },
    

});
const Fee = mongoose.model("Fee", feeSchema);
module.exports = Fee;
