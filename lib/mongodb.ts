import { MongoClient, Db } from 'mongodb';

let client: MongoClient | null = null;
let db: Db | null = null;

const uri = process.env.MONGODB_URI || '';
const dbName = process.env.MONGODB_DB || '';

if (!uri) {
    throw new Error(
        'Please define the MONGODB_URI environment variable in your .env file'
    );
}

if (!dbName) {
    throw new Error(
        'Please define the MONGODB_DB environment variable in your .env file'
    );
}

export async function connectToDatabase() {
    if (client && db) {
        // Use existing connection
        return { client, db };
    }

    try {
        // Create a new client
        client = new MongoClient(uri);
        await client.connect();
        db = client.db(dbName);
        console.log('Connected to MongoDB');
        return { client, db };
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        throw error;
    }
}
