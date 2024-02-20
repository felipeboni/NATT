import axios from "axios";
import { getSession } from "next-auth/react";


interface AxiosRequestProps {
    path: string,
    method: "POST" | "GET" | "DELETE",
    data?: object,
    auth?: {
        type: null | "Bearer" | "Basic",
        token: string
    }
}

const FetchWithToken = async ({ path, method, data, auth }: AxiosRequestProps) => {
    return axios({
        url: path.includes("http") ? path : `${process.env.NEXT_PUBLIC_API_URL}/api/${path}`,
        method: method,
        data: data || {},
        headers: {
            Authorization: auth && auth.type ? `${auth.type} ${auth.token}` : "",
            Accept: "application/json",
        },
    });
};

export { FetchWithToken };
