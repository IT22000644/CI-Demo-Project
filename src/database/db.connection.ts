import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI!;

const client = new MongoClient(uri);

async function run () {
    try {
        const connection = await client.connect();
        console.log("Connected to the database");

    } catch (error) {
        console.error(error);
    }
}