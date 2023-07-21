import connectDB from "../../../db/db";
import asyncHandler from "../../../hooks/asynchandler";
import { Blog } from "../../../model";
export default asyncHandler(async (req: any, res: any) => {
  connectDB();
  console.log(req.body);
  if (req.body) {
    try {
      const response = await Blog.create(req.body.values);
      res.status(200).json({
        login: true,
        message: "blog created",
      });
    } catch (err: any) {
      console.log(err);
      res.status(200).json({
        login: true,
        message: err.message || "Not created Blog",
      });
    }
  } else {
    res.status(200).json({
      login: true,
      message: "no body found",
    });
  }
});
