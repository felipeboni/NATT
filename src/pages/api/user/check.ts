import { NextApiRequest, NextApiResponse } from "next";
import { FetchWithToken } from "@/helpers/fetch";

import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerSession(req, res, authOptions)
    if (!session || !session.user) return res.status(401).json("Unauthorized");

    FetchWithToken({
        method: "GET",
        path: `users/${session.user.id}`,
        data: {},
        auth: {
            type: "Bearer",
            token: session.user.api_token
        }
    }).then((AxiosRes) => {
        return res.status(200).json(AxiosRes.data);
    }).catch(function (error) {
        return res.status(500).json(error);
    });
}
