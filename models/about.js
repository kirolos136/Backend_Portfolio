const mongoose =require('./models');

const aboutSchema = new mongoose.Schema({
    name:{type: String ,required :true},
    profession:{type:String,required:true},
    bio:{type:String,required:true},
    skills:[String],
    education:String
});

const About = mongoose.model('About',aboutSchema);

module.exports = About;