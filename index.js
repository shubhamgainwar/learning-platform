import app from "./server/src/app.js";
import connectDB from "./server/src/config/db.js";

const port = process.env.PORT;
connectDB()
  .then(
    app.listen(process.env.PORT || 8080, () => {
      console.log(`server is running on port ${process.env.PORT}`);
    })
  )
  .catch((error) => {
    console.log("MongoDB connection Failed !!", error);
  });
