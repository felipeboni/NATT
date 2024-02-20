import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        user: User;
    }

    export interface User {
        id: number,
        api_token: string,
        created_at: string,
        updated_at: string
    }
}