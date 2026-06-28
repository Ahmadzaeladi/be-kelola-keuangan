import 'dotenv/config';
import db from './config/database.js';
import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/index.js';
import docs from './docs/index.js';
import cors from 'cors';

async function init() {
  try {
    const result = await db();
    console.log("Database status:", result);

    const app = express();

    app.use(cors());
    app.use(bodyParser.json());

    const PORT = 3000;

    app.get("/", (req, res) => {
      res.status(200).json({
        message: "Server is running",
      });
    });

    app.use("/api", router);
    docs(app);

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

init().catch((error) => {
  console.error("Error initializing the server:", error);
}); 