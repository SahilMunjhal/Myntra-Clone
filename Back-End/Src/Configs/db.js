const mongoose=require('mongoose');

module.exports=()=>{
    mongoose.connect('mongodb+srv://sahil:munjhalji9752@cluster0.gaztx.mongodb.net/Myntra?retryWrites=true&w=majority')
};