import type { NextApiRequest, NextApiResponse } from "next";

type Profile = {
  name: string;
  github: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Profile>
) {
  res.status(200).json({
    name: "tsubaki",
    github: "https://github.com/itsubaki",
  });
}
