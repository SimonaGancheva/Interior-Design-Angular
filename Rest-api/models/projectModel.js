const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const projectSchema = new mongoose.Schema(
  {
    userId: {
      type: ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    architect: {
      type: String,
      required: true,
    },
    client: {
      type: String,
      required: true,
    },
    terms: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    style: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    mainImageUrl: {
      type: String,
      required: [true, "Image is required!"],
      validate: /^https?s:\/\//,
    },
    imageUrl2: {
      type: String,
      required: [true, "Image is required!"],
      validate: /^https?s:\/\//,
    },
    imageUrl3: {
      type: String,
      required: [true, "Image is required!"],
      validate: /^https?s:\/\//,
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("Project", projectSchema);
