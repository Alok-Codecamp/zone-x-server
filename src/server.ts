import mongoose from "mongoose";
import config from "./app/config/config";
import app from "./appl";
import { Server } from "http";


let server: Server;





async function main() {
    try {
        await mongoose.connect(config.db_url as string);
        app.listen(config.port, () => {
            console.log(`zone-x server running on port ${config.port}`);
        })
    }
    catch (err: any) {
        console.log(err);
        throw new Error(err.message)
    }
}

main();

process.on('unhandledRejection', () => {

})