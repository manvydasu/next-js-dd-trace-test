// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { logger } from '../utils/logger';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  logger.info('test log', {name: 'John Doe'})

  res.status(200).json({ name: 'John Doe' })
}
