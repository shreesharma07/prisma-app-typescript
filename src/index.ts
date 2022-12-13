// ! // Importing Modules //
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import http from "http";
import cors from "cors";
import path from "path";

// ! // Importing Other Configs //
import Logger from "./lib/logger";
import { config } from "./config/index";
import user from "./routes/user";

dotenv.config();

// $ // Declaring Global appRoot //
const appRoot: string = path.resolve(__dirname);

// * // Configuring Application //
const app: Express = express();
app.use(config.morgan);

// * // Assingin Middlewares //
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) =>
  res.status(200).send("Welcome to my Prisma App")
);

app.use("/user", user);

// ! // Route Middleware //
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Route Not Found" });
});

// * // Creating and Initializing Express Server //
http.createServer(app).listen(config.server.port, () => {
  Logger.info(
    `[server ✨] Listening on http://localhost:${config.server.port}`
  );
});
