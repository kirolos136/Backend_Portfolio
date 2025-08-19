const Message = require('../models/message');

const sendMessage = async (req,res) =>{
    try {
        const message = new Message(req.body);
        const createdMessage = await message.save();
        res.status(201).json({message:"message created",data : createdMessage});
    } catch (error) {
        console.error("failed to send message", error);
        res.status(500).json({message:"failed to send message"});
    }
}

module.exports = sendMessage;