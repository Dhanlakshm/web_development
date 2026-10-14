//express
//corss

const express=require("express")  //express.js
const cors=require("cors")


const app=express();    //create the express app

//cors
app.use(cors())  //resgiter the cors--middleware to ex application
                //cors() --> create the cors middleware
app.use(express.json())

app.get("/api/message",(req,res)=>{
    res.json({
        message:"hellllo",
        name:"riya"
    })
});

app.listen(5000,()=>{
    console.log("server runnning.....on port 5000")
});
