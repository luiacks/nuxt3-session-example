import mongoose from "mongoose";

export default defineNitroPlugin(async () => {
  mongoose.connect(process.env.MONGODB_URL || "");
});
