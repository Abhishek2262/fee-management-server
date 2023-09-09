const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  addmissionNumber: {
    type: String,
  },
  dob:{
    type:String,
  },
  classes:{
    type:String
  },
  rollNumber:{
    type: Number,
  },
  phoneNumber:{
    type:Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
