const mongoose=require('mongoose');
const bcryptjs=require('bcryptjs');

const UserSchema=new mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
});

UserSchema.pre('save',function(next){
    if(!this.isModified("password")) next();
    this.password=bcryptjs.hashSync(this.password,8);
    next();
});


UserSchema.methods.checkPassword=function(password){
    return bcryptjs.compareSync(password,this.password);
}

module.exports=mongoose.model("users",UserSchema);
