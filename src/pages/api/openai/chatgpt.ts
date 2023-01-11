import { ChatGPTAPIBrowser } from 'chatgpt';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'POST') {
    try {
      const api = new ChatGPTAPIBrowser({
        email: process.env.OPENAI_EMAIL || '',
        password: process.env.OPENAI_PASSWORD || '',
        isGoogleLogin: true,
        markdown: true,
      });

      await api.initSession();

      let result = await api.sendMessage('What is OpenAI?', {});

      console.log({ 1: result.response });

      result = await api.sendMessage('What were we talking about?', {
        conversationId: result.conversationId,
        parentMessageId: result.messageId,
      });

      console.log({ 2: result.response });

      result = await api.sendMessage('What were we talking about?', {
        conversationId: result.conversationId,
        parentMessageId: result.messageId,
      });

      result = await api.sendMessage(req.body.userRequest, {
        conversationId: result.conversationId,
        parentMessageId: result.messageId,
      });
      console.log({ 3: result.response });

      res.status(200).json({ iSuccess: true, message: result.response });
    } catch (err: any) {
      res.status(200).json({ iSuccess: false, message: err.message });
    }
  }
}
