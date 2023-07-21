import connectDB from "../../../db/db";
import asyncHandler from "../../../hooks/asynchandler";
import { Blog } from "../../../model";
export default asyncHandler(async (req: any, res: any) => {
  connectDB();
  try {
    const response = await Blog.find();
    res.status(200).json({
      login: true,
      data: response,
      message: "Got data",
    });
  } catch (err: any) {
    console.log(err);
    res.status(200).json({
      login: true,
      message: err.message || "Not got data",
    });
  }
});
