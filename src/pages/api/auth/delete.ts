import { NextApiRequest, NextApiResponse } from "next";
import { FetchWithToken } from "@/helpers/fetch";
import { getServerSession } from "next-auth";
import { authOptions } from "./[...nextauth]";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerSession(req, res, authOptions)
    if (!session || !session.user) return res.status(401).json("Unauthorized");

    FetchWithToken({
        method: "DELETE",
        path: `users/${session.user.id}`,
        auth: {
            type: "Bearer",
            token: session.user.api_token
        }
    }).then((AxiosRes) => {
        return res.status(200).json(AxiosRes.data);
    }).catch(function (error) {
        console.log(error)
        return res.status(500).json(error);
    });
}
