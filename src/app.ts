import * as dotenv from "dotenv";
import express from "express";

import setRoutes from "./routes";

console.log({ path: __dirname + "/.env" });
dotenv.config({ path: __dirname + "/.env" });

const app = express();

app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV !== "production") {
  console.log(
    `The actual env is ${process.env.NODE_ENV}, this is not a production ENV`
  );
} else {
  console.log(`The actual env is ${process.env.NODE_ENV}`);
  console.log("CAREFUL!! This the production ENV");
}
setRoutes(app);

export default app;
