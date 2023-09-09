const Student = require("../model/StudentModel");

// type: @GET
// desc: Get all students
const getAllStudent = async (req, res) => {

  try {
    
    const student = await Student.find({})
      res.status(201).json({ data: student });

  } catch (err) {
    console.error(err);
  }
}
// Type: @POST
// desc: Create Student
const createStudent =  async (req, res) => {
  try {

    if(!req.body){
      return res.status(403).json("Empty request body received!")
    }
    const { name, dob, classes, rollNumber, phoneNumber } = req.body;
    const response = await Student.find({}).count();
    const addmissionNumber = "ADM" + (response + 1);
    const newStudent = new Student({
      name,
      addmissionNumber,
      dob,
      classes,
      rollNumber,
      phoneNumber,
    });
    const student = await newStudent.save();

    if (!student) res.json({ message: "Error in creating student" });
    else res.json({ message: "Student created successfully" });

    // res.json(newStudent);
  } catch (err) {
    console.error(err);
  }
}

// type: @POST
// desc: Get single student
const getSingleStudent =  async (req, res) => {

  if(!req.body){
    return res.status(403).json("Empty request body received!")
  }

  try {
    const { rollNumber } = req.body;
    const student = await Student.findOne({ rollNumber })

    if(student){
      return res.json({ data: student });
    }else{
      return res.status(200).json({message: "Provided roll number did not matched with any student!"})
    }

  } catch (err) {
    console.error(err);
  }
}

// type: @PUT
// desc: Update student
const updateStudent = async (req, res) => {

  
  if(!req.body){
    return res.status(403).json("Empty request body received!")
  }


  try {
    const { rollNumber } = req.body;
    const student = await Student.findOne({ rollNumber });

    if (!student) res.json({ message: "Student doesn't exist" });
    else {
      const { name, dob, classes, rollNumber, phoneNumber } = req.body;
      const response = await Student.updateOne(
        { rollNumber },
        { $set: { name, dob, classes, rollNumber, phoneNumber } }
      );
      if (!response) res.json({ message: "Error in updating student" });
      else res.json({ message: "Student updated successfully" });
    }
  } catch (err) {
    console.error(err);
  }
}

// type: @DELETE
// desc: Delete student
const deleteStudent = async (req, res) => {

  if(!req.body){
    return res.status(403).json("Empty request body received!")
  }

  try {
    const { rollNumber } = req.body;
    const student = await Student.findOne({ rollNumber });

    if (!student) res.json({ message: "Student doesn't exist" });
    else {
      const response = await Student.findOneAndDelete({ rollNumber });
      if (!response) res.json({ message: "Error in deleting student" });
      else res.json({ message: "Student deleted successfully" });
    }
  } catch (err) {
    console.error(err);
  }
}

module.exports = {getAllStudent, getSingleStudent, createStudent, updateStudent, deleteStudent};
