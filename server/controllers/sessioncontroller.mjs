import Session from "../models/sessionmodel.mjs"; // Import the Session model
import User from "../models/usermodel.mjs";

// Create a new session
export const createSession = async (req, res) => {
  try {
    const { sessionId, userId, token } = req.body;

    // Validate userId exists
    // (Assuming you have a User model)
    const userExists = await User.findById(userId);
    if (!userExists) return res.status(404).json({ message: "User not found" });

    const session = new Session({ sessionId, userId, token });
    await session.save();
    res.status(201).json(session);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a session by ID
export const getSession = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);
    if (!session) return res.status(404).json({ message: "Session not found" });
    res.status(200).json(session);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a session by ID
export const updateSession = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Optional: Validate userId if it's part of the update
    const userExists = await User.findById(updateData.userId);
    if (updateData.userId && !userExists) return res.status(404).json({ message: "User not found" });

    const updatedSession = await Session.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedSession)
      return res.status(404).json({ message: "Session not found" });
    res.status(200).json(updatedSession);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a session by ID
export const deleteSession = async (req, res) => {
  try {
    const { id } = req.params;
    const session = await Session.findByIdAndDelete(id);
    if (!session) return res.status(404).json({ message: "Session not found" });
    res.status(200).json({ message: "Session deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
