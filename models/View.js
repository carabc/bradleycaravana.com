import mongoose from "mongoose";
import connectDB from "../lib/mongo";

const { Schema } = mongoose;

const viewSchema = new Schema({
  // id is already added by mongo
  slug: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    default: 1,
  },
});

if (mongoose.models.Views) {
} else {
}

const Views = mongoose.models.View || mongoose.model("View", viewSchema);

export default Views;
