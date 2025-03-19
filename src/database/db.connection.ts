import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI!;

const client = new MongoClient(uri);

async function run () {

    let connection: MongoClient | null;
    try {
        console.log("Connected to the database");
        connection = await client.connect();

    } catch (error) {
        console.error(error);
        connection = null;
    }

    return connection;
}

const dbConnection = run();

export default dbConnection;

