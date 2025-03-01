const { S3Client, GetObjectCommand, PutObjectCommand } = require("@aws-sdk/client-s3");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const sharp = require("sharp"); // ✅ Replaces ImageMagick

const s3 = new S3Client({ region: "us-east-1" });

exports.handler = async (event) => {
    let filesProcessed = event.Records.map(async (record) => {
        let bucket = record.s3.bucket.name;
        let filename = record.s3.object.key;

        // Get file from S3
        const params = { Bucket: bucket, Key: filename };
        let { Body } = await s3.send(new GetObjectCommand(params));

        // Convert Body to Buffer
        const imageBuffer = await Body.transformToByteArray();

        // Resize image using Sharp
        const resizedBuffer = await sharp(imageBuffer)
            .resize(150, 150) // ✅ Replaces ImageMagick
            .toFormat("jpeg")
            .toBuffer();

        // Upload resized image back to S3
        let targetFilename = filename.replace(/\.[^.]+$/, "") + "-small.jpg";
        const uploadParams = {
            Bucket: bucket + "-dest",
            Key: targetFilename,
            Body: resizedBuffer,
            ContentType: "image/jpeg",
        };
        await s3.send(new PutObjectCommand(uploadParams));

        console.log(`Resized image uploaded: ${targetFilename}`);
    });

    await Promise.all(filesProcessed);
    console.log("Processing completed.");
    return "done";
};
