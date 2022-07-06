import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://adam:adam@cluster0.rpdro.mongodb.net/?retryWrites=true&w=majority";
const options = {};

const client = new MongoClient(uri, options);
const clientPromise = client.connect();

export default clientPromise;
