import mongoose, { models } from "mongoose";
const { Schema } = mongoose;

const blogSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  domain: {
    type: String,
    required: true,
  },
  created_at: {
    type: String,
  },
  tl: {
    type: String,
    required: true,
  },
  has: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },

  content: {
    type: [String],
    required: true,
  },
  conten: {
    type: String,
  },
  img: {
    type: String,
    required: true,
  },
  by: {
    type: String,
    required: true,
  },
  des: {
    type: String,
    required: true,
  },
  hash: {
    type: [String],
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  tagline: {
    type: String,
    required: true,
  },
  rating: {
    default: 100,
    type: String,
    required: true,
  },
});

const Blog = models.Blog || mongoose.model("Blog", blogSchema);
export default Blog;
