const { default: mongoose } = require("mongoose")
const feeSchema = new mongoose.Schema({
    months:{
        type:String,
        enum : ["January", "Feburary", "March","April", "May", "June", "July", "August", "September", "October","November", "December"]
    },

});
const Fee = mongoose.model("Fee", feeSchema);
module.exports = Fee;
