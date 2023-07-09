import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  user_id: {
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
  tag: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },

  content: {
    type: [String],
    required: true,
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
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
