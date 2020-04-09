var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var servicesSchema=new Schema({
    img:String,
    sname:String
}
);
var service=mongoose.model('service',servicesSchema,'service');
module.exports=service;