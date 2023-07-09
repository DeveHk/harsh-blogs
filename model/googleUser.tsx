import mongoose, { models } from "mongoose";
const { Schema } = mongoose;

const googleUserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
});

const GoogleUser =
  models.GoogleUser || mongoose.model("GoogleUser", googleUserSchema);
export default GoogleUser;
