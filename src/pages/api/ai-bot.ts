// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { AiBot } from "lib/ai-bot/ai-bot.service";
import type { NextApiRequest, NextApiResponse } from "next";

const aiBot = new AiBot();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const request = await aiBot.createCompletion(req.body.userRequest);

    res.status(200).json({ response: request });
  }
}
