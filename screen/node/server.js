import express from "express";
import "dotenv/config";
// import path from "path"

const app = express();

// app.use();
app.use(express.json());
// app.use(cookieParser());

try {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("MongDb is connected");
} catch (error) {
  console.error("MongoDB connection error", error);
  process.exit(1);
}

app.listen(3000, () => {
  console.log("When you open this submit your git hub");
});
