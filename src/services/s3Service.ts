import {s3} from "../config/s3"

export const uploadToS3=async(file:Express.Multer.File)=>{
    const params={
        Bucket:process.env.S3_BUCKET_NAME!,
        Key:Date.now()+ "-" + file.originalname,
        Body:file.buffer,
        ContentType:file.mimetype,
    }

    return await s3.upload(params).promise();
}