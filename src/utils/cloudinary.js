import {v2 as cloudinary} from "cloudinary";
import fs from "fs";
import ApiError from "./ApiError";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) throw new Error("Local file path is required");
        if (!fs.existsSync(localFilePath)) throw new Error("File does not exist");

        const result = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });
        console.log("Cloudinary upload result:", result.url);
        fs.unlinkSync(localFilePath); // Remove the file after upload
        return result;
    } catch (error) {
        throw new Error("Error uploading file to Cloudinary");
    }
};


export { uploadOnCloudinary };
