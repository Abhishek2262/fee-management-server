const Fee = require('../model/FeesModel.js');
const Student = require('../model/StudentModel.js');


const getAllFees = async (req, res) => {

    try{
        const feeslist = await Fee.find();

        res.status(201).json({data: feeslist})
    }
    catch(err) {
        console.log(err)
        res.status(500).json(err)

    }
}
const addNewFeeItem = async (req, res) => {
    if(!req.body){
        return res.status(403).json({message:"Empty request body recieved!"})
    }
    try{

        const {rollNumber, amount, mode} = req.body;

        // check if student exists with the provided roll number

        const student = Student.findOne({rollNumber}).exec();

        if(!student) {
            return  res.status(403).json({message: "No student found with the provided roll number!"})
        }

        const newFeeItem = new Fee({
            mode,
            amount,
            rollNumber
        })

        const data = await newFeeItem.save()

        if(!data){
            return res.status(502).json({message: "Could note create a new fees records", error: data})
        }

        return res.status(201).json("data")
        

    }catch(err) {
        console.log(err)
        res.status(500).json(err)
    }
}

const getAllFeesForOneStudent = async (req, res) => {
    if(!req.params || !req.params.rollNumber){
        return res.status(400).json({message: "Invalid parameters received!"})
    }

    const {rollNumber} = req.params

    try{

        /** The data will contain all the fees records with the given roll number, sorted in descending order by date. */
        const data = await Fee.find({rollNumber}).sort({createdAt: -1})
        return res.status(201).json(data)
    }catch(err){
        console.log(err);
        res.status(500).json(err)
    }

}

const getSingleFeeItem = async (req, res) => {

    if(!req.params || !req.params.feeId){
        return res.status(400).json({message: "Invalid parameters received!"})
    }

    const {feeId} = req.params

    try{
        const data = await Fee.findOne({_id: feeId})

        if(!data) return res.status(404)
        return res.status(201).json(data)
    }catch(err){
        console.log(err);
        res.status(500).json(err)
    }

}

module.exports = {getAllFees, addNewFeeItem, getSingleFeeItem, getAllFeesForOneStudent}