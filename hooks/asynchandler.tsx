// utils/asyncHandler.js

const asyncHandler = (handler: any) => (req: any, res: any) =>
  Promise.resolve(handler(req, res)).catch((error) => {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  });

export default asyncHandler;
