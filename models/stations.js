var mongoose=require("mongoose");
var stationSchema=new mongoose.Schema({
    name:String,
    operation:String,
    phone:String,
    
    lat:Number,
    lon:Number
    
})
var Station=mongoose.model("Station",stationSchema);
module.exports=Station;