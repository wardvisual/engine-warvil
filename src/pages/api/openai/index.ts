// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAIClient from './openai.service';

const openAIClient = new OpenAIClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'POST') {
    const request = await openAIClient.createCompletion(
      req.body.command,
      req.body.userRequest
    );

    res.status(200).json(request);
  }
}
