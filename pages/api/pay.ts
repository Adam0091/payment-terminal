import type { NextApiRequest, NextApiResponse } from "next";
import { providerType } from "../../type";

function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<providerType>>
) {
  if (req.method === "POST") {
    const data = Boolean(randomIntFromInterval(0, 1));
    const fakeData = [{ id: NaN, name: "Fake", logo: "Fake" } as providerType];

    data ? res.status(200).json(fakeData) : res.status(400).json(fakeData);
  }
}
