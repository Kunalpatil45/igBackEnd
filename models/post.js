const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  text: { type: String, required: true },

  // media support (image + video)
  media: { type: String, required: true },
  mediaType: { type: String, enum: ["image", "video"], required: true },

  // likes system
  likes: { type: Number, default: 0 },
  likedBy: [{ type: String }], // userId list

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Post", postSchema);
