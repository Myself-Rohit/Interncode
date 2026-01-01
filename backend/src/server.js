import express from "express";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import { serve } from "inngest/express";
import { inngest, functions } from "./lib/inngest.js";
const app = express();
const port = ENV.PORT || 3001;

app.use(express.json());
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));

app.use("api/inngest", serve({ client: inngest, functions }));

function startServer() {
  try {
    connectDB();
    app.listen(port, () => {
      console.log(`app running at port: ${port}`);
    });
  } catch (error) {
    console.log("Error connecting database");
  }
}
startServer();
