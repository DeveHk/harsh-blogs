import mongoose from 'mongoose';


////////////////////////////////////
const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(
      "mongodb+srv://HarshBlogs:HarshBlogs123@cluster0.0bd7uea.mongodb.net/?retryWrites=true&w=majority",// Create a MongoClient with a MongoClientOptions object to set the Stable API version

    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    //console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};
export default connectDB

