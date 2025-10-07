import "dotenv/config";
import express, { Request, Response } from "express";
import { connectionDB } from "./database/db.connection";


const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from the express app!");
})

app.post("/users/signup", (req: Request, res: Response) => {
    res.status(201).send("Success");
})

app.get("/health", (req: Request, res: Response) => {
    res.status(200).send("Success");
})

// just a random comment 123 123 123 123 123 123

app.listen(port, () => {
    connectionDB();
    console.log(`Server is running on port ${port}`);
})