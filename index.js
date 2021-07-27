import express from "express";
const app = express();
// const router=express.Router();
import mongoose from "mongoose";
import { studentRouter } from "./routes/students.js";
import { mentorRouter } from "./routes/mentors.js";
// import { Students } from "./models/student.js";
const PORT = process.env.PORT || 3001;

// opened connection to db

const url = "mongodb://localhost/Students";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;
con.on("open", () => console.log("MongoDB is connected"));

// middleware
app.use(express.json());
// to get the home page
// app.get("/", (request, response) => {
//   response.send("Welcome Guys, to my Node app!");
// });
// // to get all students data
// app.get("/students", async (request, response) => {
//   try {
//     const studentsList = await Students.find();
//     response.send(studentsList);
//     console.log(studentsList);
//   } catch (err) {
//     response.send(err);
//     console.log(err);
//   }
// });
// // to get students by Id
// app.get("/students/:name", async (request, response) => {
//   const {name}=request.params;
//   console.log(name);
//   try {
//     // const student = await Students.find({name:name});
//     const student = await Students.find({name:RegExp(name,"i")});
//     response.send(student);
//     console.log(student);
//   } catch (err) {
//     response.send(err);
//     console.log(err);
//   }
// });
// // to add new students
// app.post("/students", async (request, respone) => {
//   const addStdnt = request.body;
//   console.log(addStdnt);
//   const student = new Students(addStdnt);

//   try {
//     const newStudent = await student.save();
//     respone.send({newStudent, message:"Added successfully"});
//   } catch (err) {
//     respone.status(500);
//     respone.send(err.message);
//     console.log(err);
//   }
// });
// // to delete student by Id
// app.delete('/students/:id',async(request,response)=>{
//   const {id}=request.params;
//   console.log("id of student to be removed",id);
 
//   try{
//     const student=await Students.findById({_id:id});
//     console.log("student to be removed",student)
//     await student.remove();
//     response.send({student,message:'deleted successfully!'})
//   }
//   catch(err){
//     response.send(err);
//     console.log(err);
//   }
// })
// // to update the student Info
// app.patch('/students/:id',async (request,response)=>{
//   const {id}=request.params;
//    const {name,email,mentorId}=request.body;
//   console.log(id);
//   try {
//     // const student = await Students.find({name:name});
//     const student = await Students.findById({_id:id});
//   if(name){
//     student.name=name;
//   }
//   if(email){
//     student.email=email;
//   }
//    if(email){
//     student.email=email;
//   }
//   if(mentorId){
//     student.mentorId=mentorId;
//   }
//   await student.save();
//     response.send({student,message:"Updated successfully"});
//     console.log(student);
//   } catch (err) {
//     response.send(err);
//     console.log(err);
//   }

// })
app.use('/',studentRouter);
app.use('/',mentorRouter);


app.listen(PORT, () => console.log(`server is started at ${PORT}`));
