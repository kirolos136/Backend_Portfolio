const About = require('../models/about');

const getAbout = async (req,res)=>{
    try{
        const about = await About.findOne();

        if (!about || about.length === 0) {
            return res.status(404).json({ message: "No about data found" });
        }

        res.status(200).json(about);
    }catch(err){
        console.error('Error fetching about data:',err);
        res.status(500).json({message:"failed to fetch about"})
    }
}

module.exports = {getAbout};