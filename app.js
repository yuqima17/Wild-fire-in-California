var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
app.use(bodyParser.urlencoded({ extended: false }));
var fs=require("fs");
var Station=require("./models/stations.js")
app.use(express.static(__dirname + "/public"));

mongoose.connect("mongodb://localhost/fire_app", { useNewUrlParser: true } );

var station_obj=JSON.parse(fs.readFileSync('station_json3.json','utf8'));
var hazard_obj=JSON.parse(fs.readFileSync('hazard_json3.json','utf8'));

// station_obj['features'].forEach(function(feature){
//     Station.create({
//         name:feature["attributes"]["STAT_NAME"],
//         operation:feature["attributes"]["STAT_TYPE"],
//         phone:feature["attributes"]["PHONE_NUM"],
    
//             lat:feature["geometry"]["y"],
//             lon:feature["geometry"]["x"]
        
        
//     })
// })


app.get("/",function(req,res){
    
            res.render("home.ejs",{stations_json:station_obj,hazard_json:hazard_obj})
        
    
})

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("START FIRE PAGE");
})