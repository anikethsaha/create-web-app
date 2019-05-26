import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import { Request, Response , NextFunction } from "express";
import dotenv from "dotenv";
import { connectToMongoDB, getDB } from "./utils/mongoUtils";


dotenv.config({ path: ".env" });
connectToMongoDB();
const app = express();
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));


app.set("port", (process.env.PORT || 8080));
app.set("trust proxy", true);
app.use(cors());

// V
// static files and views
app.use(express.static(path.join(__dirname, "../src/public")));
app.set("view engine" , "ejs");
app.set("views", [
	path.join(__dirname, "../src/views"),
	path.join(__dirname, "../src/views/layouts/")
]);
app.engine("html", require("ejs").renderFile);


app.use(function(req: Request, res: Response, next: NextFunction) {

	next();
});


import {  /* MyRoutes */   } from "./routes";



app.get("/", (req: Request, res: Response) => {
	res.render("index.ejs");
});


app.use((req: Request, res: Response, next: NextFunction) =>  res.status(404).send("404"));


app.listen(app.get("port"), () => {
	console.log("> Server is running on PORT ", app.get("port"));
});


export default app;