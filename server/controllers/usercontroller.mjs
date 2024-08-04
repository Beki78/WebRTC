// controllers/userController.js
import User from "../models/usermodel.mjs"; // Import your User model

// Create a new user
export const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a user by ID
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a user by ID
    export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { userName, password } = req.body;
        const existingUser = await User.findById(id);
        if (!existingUser)
        return res.status(404).json({ message: "User not found" });

        // Update only the name, keeping the existing email
        const updatedUser = await User.findByIdAndUpdate(
        id,
        { userName, password },
        { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
    };

// Delete a user by ID
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
