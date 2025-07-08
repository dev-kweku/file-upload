import {Request,Response} from "express"
import { uploadToS3 } from "../services/s3Service"


export const uploadFile=async(req:Request,res:Response):Promise<void>=>{
    if(!req.file){
        res.status(400).send("No file uploaded")
        return;
    }
        try{
    const result=await uploadToS3(req.file)
    res.status(200).json({url:result.Location})
    return;
    }catch(err){
        console.error(err);
        res.status(500).send("upload failed");
    }
}