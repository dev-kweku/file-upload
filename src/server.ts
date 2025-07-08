import express from "express"
import dotenv from "dotenv"
const port=3000
import router from "./routes/uploadRoutes"


dotenv.config();
const app=express();

app.use(express.json())
app.use("/api/v1",router)

app.get('/api/v1',(req,res)=>{
    res.send({msg:"app is ready"})
})


app.listen(port,()=>{
    console.log(`server is up on http://localhost:${port}/api/v1`)
})