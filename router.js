const router = require("express").Router(); // Importing Router from express
const Student = require("./model/model.js");

// type: @GET
// desc: Get all students
router.get("/student", (req, res) => {
    try {
      Student.find({}).then(function (student) {
        res.json({ data: student });
      });
    } catch (err) {
      console.error(err);
    }
});


// Type: @POST
// desc: Create Student
router.post("/create", async (req, res) => {
  try {
    const { name, dob, classes, rollNumber, phoneNumber } = req.body;
    const response = await Student.find({}).count()
    const addmissionNumber = "ADM" + (response+1)
    const newStudent = new Student({ name, addmissionNumber, dob, classes, rollNumber, phoneNumber });
    const student = await newStudent.save();

    if (!student) res.json({ msg: 'Error in creating student' })
    else res.json({ msg: 'Student created successfully' })

    // res.json(newStudent);
  } catch (err) {
    console.error(err);
  }
});


// type: @POST
// desc: Get single student
router.post("/student", (req, res) => {
    try {
        const {rollNumber} = req.body
      Student.findOne({rollNumber}).then(function (student) {
        res.json({ data: student });
      });
    } catch (err) {
      console.error(err);
    }
});


// type: @PUT
// desc: Update student
router.put("/student", async (req, res) => {
    try {
        const {rollNumber} = req.body
      const student = await Student.findOne({rollNumber})

        if (!student) res.json({ msg: "Student doesn't exist" })
        else {
            const { name, dob, classes, rollNumber, phoneNumber } = req.body;
            const response = await Student.updateOne({rollNumber}, {$set: { name, dob, classes, rollNumber, phoneNumber }})
            if (!response) res.json({ msg: "Error in updating student" })
            else res.json({ msg: 'Student updated successfully' })
        }

    } catch (err) {
      console.error(err);
    }
});


// type: @DELETE
// desc: Delete student
router.delete("/student", async (req, res) => {
    try {
        const {rollNumber} = req.body
      const student = await Student.findOne({rollNumber})

        if (!student) res.json({ msg: "Student doesn't exist" })
        else {
            const {rollNumber} = res.body;
            const response = await Student.findOneAndDelete({ rollNumber })
            if (!response) res.json({ msg: "Error in deleting student" })
            else res.json({ msg: 'Student deleted successfully' })
        }

    } catch (err) {
      console.error(err);
    }
});


module.exports = router;
