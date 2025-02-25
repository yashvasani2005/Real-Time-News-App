import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  title: String,
  category: String,
  content: String,
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
}, { timestamps: true });

newsSchema.index({ category: 1 });
export default mongoose.model("News", newsSchema);
