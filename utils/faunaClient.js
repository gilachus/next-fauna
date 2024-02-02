import { Client } from "fauna";

export const adminClientX = () => { 
    return new Client({secret: process.env.FAUNA_CLIENT_SECRET_NEW + ""});
}