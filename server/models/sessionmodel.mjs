import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema({
  sessionId: {
    type: String, // Unique identifier for the session
    unique: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the User model
    ref: "User", // The model being referenced
    required: true, // Ensures this field is required
  },
  token: {
    type: String, // Authentication token for the session
    unique: true,
    required: true,
    required: [true, "This field can't be empty"],
  },
  createdAt: {
    type: Date, // Timestamp for when the session was created
    default: Date.now,
  },
  updatedAt: {
    type: Date, // Timestamp for when the session was last updated
    default: Date.now,
  },
  expiredAt: {
    type: Date, // Timestamp for when the session expires
    default: Date.now,
  },
});

// Middleware to update the updatedAt field before saving
SessionSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});
const Session = mongoose.model("Session", SessionSchema);
export default Session;
