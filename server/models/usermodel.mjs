import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { genSaltSync } from "bcrypt";

const UserSchema = new mongoose.Schema({
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

// Add a pre-save hook to update the updatedAt field and hash the password
UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    // Only hash the password if it has been modified
    const salt = genSaltSync(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  // Update the updatedAt field
  this.updatedAt = Date.now();
  next();
});

const User = mongoose.model("User", UserSchema);
export default User;
