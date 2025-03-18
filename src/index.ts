import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from the express app!");
})

app.post("/users/signup", (req: Request, res: Response) => {
    res.status(201).send("Success");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})