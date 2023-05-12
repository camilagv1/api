// este archivo pone a disposicion de nosotros las variables de entorno
import{ config } from "dotenv";

config();

export default{
    host: process.env.HOST || "",
    database: process.env.DATABASE || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || ""

};
