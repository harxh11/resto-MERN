import express from 'express';
import cors from "cors";
import mongoose from 'mongoose';
import { AuthRouter } from './routes/auth.js';
import { UserRouter } from './routes/users.js';


const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", AuthRouter);
app.use("/users", UserRouter);

mongoose.connect("mongodb+srv://harshjagtap2003:HARsH0811@resto.23uefnm.mongodb.net/resto?retryWrites=true&w=majority");


app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(3001, () => {
  console.log(`Example app listening on port 3001`);
});