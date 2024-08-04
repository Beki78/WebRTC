// controllers/whiteboardController.js
import Whiteboard from "../models/whiteboardmodel.mjs"; // Adjust path as needed

// Create a new whiteboard
export const createWhiteboard = async (req, res) => {
  try {
    const { whiteboardId, userId, sessionId, content } = req.body;

    const whiteboard = new Whiteboard({
      whiteboardId,
      userId,
      sessionId,
      content,
    });
    await whiteboard.save();
    res.status(201).json(whiteboard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a whiteboard by ID
export const getWhiteboard = async (req, res) => {
  try {
    const whiteboard = await Whiteboard.findById(req.params.id);
    if (!whiteboard)
      return res.status(404).json({ message: "Whiteboard not found" });
    res.status(200).json(whiteboard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a whiteboard by ID
export const updateWhiteboard = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedWhiteboard = await Whiteboard.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
      }
    );
    if (!updatedWhiteboard)
      return res.status(404).json({ message: "Whiteboard not found" });
    res.status(200).json(updatedWhiteboard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a whiteboard by ID
export const deleteWhiteboard = async (req, res) => {
  try {
    const { id } = req.params;
    const whiteboard = await Whiteboard.findByIdAndDelete(id);
    if (!whiteboard)
      return res.status(404).json({ message: "Whiteboard not found" });
    res.status(200).json({ message: "Whiteboard deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
