import { Server } from "http";
import app from "./app";


const port = process.env.PORT || 8888

async function main (){
    try {
        const server :Server = app.listen(port,()=>{
            console.log(`server listening port ${port}`);
        })
    } catch (error) {
        console.error(error)
    }
}
main();