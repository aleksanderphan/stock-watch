import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/lib/mongodb";
import Stock from "@/models/Stock";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  switch (req.method) {
    case "GET": { // TODO: filter by date from query
      const stocks = await Stock.find();
      return res.status(200).json(stocks);
    }
    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}
