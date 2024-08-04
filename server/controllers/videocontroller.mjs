import Video from "../models/videomodel.mjs"; // Import the Video model

// Create a new video conversation
export const createVideo = async (req, res) => {
  try {
    const {
      conversationId,
      participants,
      startTime,
      endTime,
      status,
      recording,
    } = req.body;

    // Create a new video document
    const video = new Video({
      conversationId,
      participants,
      startTime,
      endTime,
      status,
      recording,
    });

    // Save the video document to the database
    await video.save();
    res.status(201).json(video); // Respond with the created video
  } catch (error) {
    res.status(400).json({ message: error.message }); // Handle any errors
  }
};

// Get a video conversation by ID
export const getVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id); // Find the video by ID
    if (!video) return res.status(404).json({ message: "Video not found" });
    res.status(200).json(video); // Respond with the video
  } catch (error) {
    res.status(400).json({ message: error.message }); // Handle any errors
  }
};

// Update a video conversation by ID
export const updateVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Update the video document
    const updatedVideo = await Video.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedVideo)
      return res.status(404).json({ message: "Video not found" });
    res.status(200).json(updatedVideo); // Respond with the updated video
  } catch (error) {
    res.status(400).json({ message: error.message }); // Handle any errors
  }
};

// Delete a video conversation by ID
export const deleteVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const video = await Video.findByIdAndDelete(id); // Find and delete the video by ID
    if (!video) return res.status(404).json({ message: "Video not found" });
    res.status(200).json({ message: "Video deleted successfully" }); // Respond with success message
  } catch (error) {
    res.status(400).json({ message: error.message }); // Handle any errors
  }
};
