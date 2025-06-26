import path from "path";
import dotenv from 'dotenv';
import { fileURLToPath } from "url";

export const envLoader = () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const envPath = path.resolve(__dirname + '/.env');
    dotenv.config({path: envPath})
    console.log('Loaded .env from:', envPath);
}