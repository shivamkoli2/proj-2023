const transectionModel = require("../models/transectionModel")

const getALLTransection = async(req,res) =>{
    try{
        const transections = await transectionModel.find({
            userId:req.body.userId
        })
        res.status(200).json(transections)
    }catch{
        console.log(error)
        res.status(500).jsdon(error)
    }
}

const addTransection = async(req,res) =>{
    try{
        const newTransection = new transectionModel(req.body)
        await newTransection.save()
        res.status(201).send("Transection Created")
    } catch (error){
        console.log(error)
        res.status(500).json(error)
    }
}

// const editTransection = async (req,res) => {
//     try{
// await transectionModel.findOneAndUpdate(
//     { _id:req.body.transectionId},
//     req.body.payload
// )
//     res.status(200).send("edit successfully")
//     } catch(error){
//         console.log(error)
//         res.status(500).json(error)
//     }
// }

const deleteTransection = async (req, res) => {
    try {
        const { transectionid } = req.body.transectionid; // Get the transactionId from the request body
        await transectionModel.findOneAndDelete({ _id: transectionid });
        res.status(200).send("Transaction deleted");
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}


// const deleteTransection = async(req,res) =>{
//     try{
//         await transectionModel.findOneAndDelete({_id:res.body.transectionid})
//         res.status(200).send("transection delete")
//     } catch (error){
//         console.log(error)
//         res.status(500).json(error)
//     }
// }

// const editTransection = async (req, res) => {
//     try {
//         const { transectionid } = req.body; // Get the transactionId from the request body
//         const updatedData = req.body; // Get the updated data from the request body

//         const updatedTransaction = await transectionModel.findByIdAndUpdate(
//             { _id: transectionid },
//             { $set: updatedData }, // Use $set to update specific fields
//             { new: true } // Return the updated document
//         );

//         if (!updatedTransaction) {
//             return res.status(404).send("Transaction not found");
//         }

//         res.status(200).send("Edit successful");
//     } catch (error) {
//         console.error(error);
//         res.status(500).json(error);
//     }
// }

const editTransection = async (req, res) => {
    try {
        const { transectionid } = req.params; // Get the transactionId from the request params
        const updatedData = req.body; // Get the updated data from the request body

        const updatedTransaction = await transectionModel.findByIdAndUpdate(
            transectionid, // Pass the transaction ID directly
            updatedData, // Update the entire document
            { new: true } // Return the updated document
        );

        if (!updatedTransaction) {
            return res.status(404).send("Transaction not found");
        }

        res.status(200).send("Edit successful");
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}


module.exports ={getALLTransection,addTransection,editTransection,deleteTransection}


