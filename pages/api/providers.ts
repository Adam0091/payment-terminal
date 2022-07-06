import type { NextApiRequest, NextApiResponse } from "next";
import { providerType } from "../../type";
import clientPromise from "./../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<providerType>>
) {
  if (req.method === "GET") {
    const client = await clientPromise;
    const data: any = await client
      .db()
      .collection("providers")
      .find({})
      .toArray();
    res.status(200).json(data);
  }
  if (req.method === "POST") {
    const client = await clientPromise;
    const data = req.body;

    if (data) {
      const response: any = await client
        .db()
        .collection("providers")
        .insertOne(data);
      res.json(response);
    }
  }
}
