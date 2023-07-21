import mongoose, { models } from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
  },
  userID: {
    type: String,
    required: true,
    unique: true,
  },
  refreshToken: {
    type: [String],
  },
});

const User = models.User || mongoose.model("User", userSchema);
export default User;
