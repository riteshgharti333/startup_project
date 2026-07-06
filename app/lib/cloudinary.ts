"use server";

import { v2 as cloudinary } from "cloudinary";

// Configure on server - API keys NEVER exposed to client
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadResume(file: File) {
  if (!file) {
    throw new Error("No file provided");
  }

  // Validate file size (2MB)
  if (file.size > 2 * 1024 * 1024) {
    throw new Error("File size must be less than 2MB");
  }

  // Validate file type
  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  if (!allowedTypes.includes(file.type)) {
    throw new Error("Only PDF, DOC, or DOCX files are allowed");
  }

  // Convert File to Buffer
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Upload to Cloudinary
  try {
    const result = await new Promise<any>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "resumes",
          resource_type: "auto",
          allowed_formats: ["pdf", "doc", "docx"],
          timeout: 120000,
        },
        (error: any, result: any) => {
          if (error) reject(error);
          else resolve(result);
        },
      );
      uploadStream.end(buffer);
    });

    return {
      success: true,
      url: result.secure_url,
      publicId: result.public_id,
      fileName: result.original_filename,
      size: result.bytes,
    };
  } catch (error: any) {
    console.error("Cloudinary upload error:", error);
    throw new Error(error.message || "Upload failed");
  }
}
