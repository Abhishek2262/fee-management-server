const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  addmissionNumber: {
    type: String,
    required: true
  },
  dob:{
    type:String,
    required: true
  },
  classes:{
    type:String,
    required: true
  },
  rollNumber:{
    type: Number,
    required: true
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
