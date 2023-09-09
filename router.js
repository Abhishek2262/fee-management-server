const studentRouter = require('./controllers/studentController')
const {getAllStudent, getSingleStudent, createStudent, updateStudent, deleteStudent} = require('./controllers/studentController')
const {getAllFees, addNewFeeItem, getSingleFeeItem, getAllFeesForOneStudent} = require('./controllers/feesController')
const router = require('express').Router();

/** ---------- Student Routes ---------- */
router.get('/students', getAllStudent )
router.post('/students/create',  createStudent)
router.post('/students', getSingleStudent  )
router.put('/students', updateStudent )
router.post('/students/delete', deleteStudent )


/** ---------- Fees Routes ---------- */

/**
 * METHOD: @GET
 * DESC: Get all the fees deposited by all of the students
 * RETURNS: Multiple values
 * 
 */
router.get('/fees', getAllFees )

/**
 * METHOD: @POST
 * DESC: Add new fees to DB
 * RETURNS: Success/Failure
 * 
 */
router.post('/fees/add', addNewFeeItem)


/**
 * METHOD: @GET
 * DESC: Get all fees for one student by student id
 * RETURNS: Multiple values
 */
router.get('/fees', getAllFeesForOneStudent)


/**
 * METHOD: @GET
 * DESC: Get single fees details by Fee id
 * RETURNS: Single Value
 */

router.get('/fees', getSingleFeeItem)




module.exports = router;