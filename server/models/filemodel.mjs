import mongoose from "mongoose";

// Define the File schema
const FileSchema = new mongoose.Schema({
  fileId: {
    type: String,
    unique: true, // Ensures that each file has a unique identifier
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the User model
    ref: "User",
    required: true,
  },
  fileName: {
    type: String,
    required: true, // The name of the file, which is required
    trim: true, // Removes any leading or trailing whitespace
  },
  fileType: {
    type: String,
    required: true, // The type or extension of the file, which is required
  },
  fileSize: {
    type: Number,
    required: true, // The size of the file in bytes, which is required
  },
  fileUrl: {
    type: String,
    required: true, // URL or path where the file is stored
    trim: true, // Removes any leading or trailing whitespace
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically sets the creation date to the current date/time
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Automatically sets the update date to the current date/time
  },
});

// Middleware to update the `updatedAt` field before saving
FileSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create and export the File model
const File = mongoose.model("File", FileSchema);
export default File;
