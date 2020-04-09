var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var carouselsSchema=new Schema({
    img:String,
    offer:String
}
);
var carousel=mongoose.model('carousel',carouselsSchema,'carousel');
module.exports=carousel;