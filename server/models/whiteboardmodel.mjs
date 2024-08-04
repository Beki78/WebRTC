import mongoose from "mongoose";

const WhiteboardSchema = new mongoose.Schema({
  whiteboardId: {
    type: String,
    unique: true,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    trim: true,
  },
  sessionId: {
    type: String,
    trim: true,
  },
  content: {
    type: Map,
    of: mongoose.Schema.Types.Mixed, // To store various data structures
    default: {}, // Default to an empty object
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to update 'updatedAt' field before saving
WhiteboardSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Whiteboard = mongoose.model("Whiteboard", WhiteboardSchema);
export default Whiteboard;
