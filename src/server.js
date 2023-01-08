import 'dotenv/config'
import express from "express";
import UserController from "./app/controllers/UserController";

const port = process.env.PORT

const app = express();

app.use(express.json())

app.post("/users", UserController.store)


app.listen(port, () => {
  console.log('server is running')
})