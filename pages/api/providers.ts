import type { NextApiRequest, NextApiResponse } from "next";
import { providerType } from "../../type";
import { providers } from "./data/providers";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<providerType>>
) {
  if (req.method === "GET") {
    res.status(200).json(providers);
  }
}
