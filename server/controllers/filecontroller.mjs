import User from "../models/usermodel.mjs";
import File from "../models/filemodel.mjs"
// Create a new file
export const createFile = async (req, res) => {
  try {
    const { fileId, userId, fileName, fileType, fileSize, fileUrl } = req.body;

    // Validate userId exists
    const userExists = await User.findById(userId);
    if (!userExists) return res.status(404).json({ message: "User not found" });

    const file = new File({
      fileId,
      userId,
      fileName,
      fileType,
      fileSize,
      fileUrl,
    });
    await file.save();
    res.status(201).json(file);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a file by ID
export const getFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file) return res.status(404).json({ message: "File not found" });
    res.status(200).json(file);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a file by ID
export const updateFile = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Optional: Validate userId if it's part of the update
    if (updateData.userId) {
      const userExists = await User.findById(updateData.userId);
      if (!userExists)
        return res.status(404).json({ message: "User not found" });
    }

    const updatedFile = await File.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedFile)
      return res.status(404).json({ message: "File not found" });
    res.status(200).json(updatedFile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a file by ID
export const deleteFile = async (req, res) => {
  try {
    const { id } = req.params;
    const file = await File.findByIdAndDelete(id);
    if (!file) return res.status(404).json({ message: "File not found" });
    res.status(200).json({ message: "File deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
