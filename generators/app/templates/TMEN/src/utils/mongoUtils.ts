import dotenv from "dotenv";
import mongodb from "mongodb";
dotenv.config({
    path: ".env"
});
let _db: mongodb.Db ;
export const connectToMongoDB = ()  =>
  new mongodb.MongoClient(process.env.MONGODB_URL)
    .connect()
    .then(conn => {
        console.log("> DB CONNECTED :");
        _db = conn.db(process.env.MONGODB_DB);
    })
    .catch(err => {
        console.log("err :", err);
    });

export const getDB = (): mongodb.Db => _db;