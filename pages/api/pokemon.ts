import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<String>>
) {
  const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
  res.status(200).json(data.results);
}
