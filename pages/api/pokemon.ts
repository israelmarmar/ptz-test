import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<String>>
) {
  const { name } = req.query;
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name || ''}`);
  res.status(200).json(name ? data.sprites.versions : data.results);
}
