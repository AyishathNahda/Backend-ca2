const express=require("express");
const app=express();
app.use(express.json());
const PORT=3000;

app.post("/login",async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email){
            return res.status(400).json({message:"Email cannot be empty"});
        }else if(!password){
            return res.status(400).json({message:"Password cannot be empty"});
        }else{
            return res.status(201).json({message:"Login Successful"});
        }
    }catch(err){
        return res.status(500).json({message:"Internal Server Error",err});
    }
});



app.get("/",(req,res)=>{
    console.log("<h1>Server is running.</h1>");
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
