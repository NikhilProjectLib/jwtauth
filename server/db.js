const mongoose=require('mongoose')
mongoose.set('strictQuery', true);  //warning strictquery


module.exports=()=>{
    const connectionParams={
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
    try{
     mongoose.connect(process.env.DB,connectionParams)
     console.log("db connected....................")
    }
    catch(error){
 console.log(error)
console.log("db not connected")
    }
}
