import { NextApiRequest, NextApiResponse } from "next";
import { FetchWithToken } from "@/helpers/fetch";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = {
        username: req.body.username,
    }

    FetchWithToken({
        method: "POST",
        path: "register",
        data: data
    }).then((AxiosRes) => {
        return res.status(200).json(AxiosRes.data);
    }).catch(function (error) {
        return res.status(500).json(error);
    });
}
