import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//localhost:5000/posts/ 
app.use("/posts", postRoutes);

const CONNECTION_URL = `mongodb+srv://darsheelchudal11:darsheel@cluster0.3jiunuh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running at Port : ${PORT}`))
  )
  .catch((error) => console.log(error.message));
