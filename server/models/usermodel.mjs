import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  // Unique identifier for the user
  userId: {
    type: String,
    unique: true,
    required: [true, "This field can't be empty"],
  },
  // Username chosen by the user
  userName: {
    type: String,
    required: [true, "This field can't be empty"],
    trim: true,
  },
  // User's email address
  email: {
    type: String,
    unique: true,
    required: [true, "This field can't be empty"],
    trim: true,
  },
  // User's hashed password
  password: {
    type: String,
    required: [true, "This field can't be empty"],
  },
  // Timestamp when the user was created
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // Timestamp when the user was last updated
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Add a pre-save hook to update the updatedAt field
UserSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const User = mongoose.model("User", UserSchema)
export default User;
