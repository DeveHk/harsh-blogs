import asyncHandler from "../../hooks/asynchandler";

export default asyncHandler(async (req:any, res:any) => {
  res.status(200).json({ message: 'Hello from the !' });
})