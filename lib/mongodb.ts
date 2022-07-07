import { MongoClient } from "mongodb";

const uri = process.env.MOBGO_URL as string;
const options = {};
const client = new MongoClient(uri, options);
export const clientPromise = client.connect();
