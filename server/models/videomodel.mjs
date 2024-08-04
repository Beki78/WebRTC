import mongoose from "mongoose";

// Define the schema for real-time video conversations
const VideoSchema = new mongoose.Schema({
  conversationId: {
    type: String,
    unique: true, // Unique identifier for each video session
    required: true, // Required field
    trim: true, // Remove any extra spaces
  },
  participants: {
    type: [mongoose.Schema.Types.ObjectId], // Array of user IDs participating in the conversation
    ref: "User",
    required: true, // Required field
  },
  startTime: {
    type: Date,
    default: Date.now, // Default to the current date and time
  },
  endTime: {
    type: Date,
  },
  status: {
    type: String,
    enum: ["active", "ended", "scheduled"], // Possible statuses for the conversation
    default: "scheduled", // Default to 'scheduled'
  },
  recording: {
    type: Boolean,
    default: false, // Default to not recording
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set to the current date and time when created
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Automatically set to the current date and time when updated
  },
});

// Middleware to set updatedAt before saving
VideoSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Video = mongoose.model("Video", VideoSchema);
export default Video;
