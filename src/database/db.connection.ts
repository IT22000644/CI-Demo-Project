import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI!;
let connection : MongoClient | null;

export async function connectionDB () {
    try {
        const client = new MongoClient(uri);
        console.log("Connected to the database");
        connection = await client.connect();

    } catch (error) {
        console.error(error);
        console.log("Could not connect to the database");
        connection = null;
    }

    return connection;
}

export { connection };

