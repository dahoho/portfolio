import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "src/lib/client";
import { BlogProps } from "src/types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await client.getList<BlogProps>({
    endpoint: "blog",
    queries: { q: req.body.q },
  });

  res.status(200).json(data);
};

export default handler;
