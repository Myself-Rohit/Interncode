import express from "express";
import { ENV } from "./src/lib/env.js";
const app = express();
const port = ENV.PORT || 3001;

app.listen(port, () => {
  console.log(`app running at port: ${port}`);
});
