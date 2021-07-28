// import dotenv.config from dotenv

import express from "express";
const app = express();
// const router=express.Router();
import mongoose from "mongoose";
import { studentRouter } from "./routes/students.js";
import { mentorRouter } from "./routes/mentors.js";
// import { Students } from "./models/student.js";
const PORT = process.env.PORT || 3001;

// opened connection to db

// const url = "mongodb://localhost/Students";
const url =
  "mongodb+srv://ishwarya_23:Kuppu@1614013@cluster0.i7g84.mongodb.net/Students?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;
con.on("open", () => console.log("MongoDB is connected"));

// middleware
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("welcome to node app!!!!");
});
app.use("/", studentRouter);
app.use("/", mentorRouter);

app.listen(PORT, () => console.log(`server is started at ${PORT}`));
