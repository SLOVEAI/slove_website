import express from "express";
import morgan from "morgan";
const path = require("path");
// import bodyParser from "body-parser";
import cors from "cors";
import { isDevelopmentMode } from "./utils";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan("combined"));
app.use(express.json());

app.use(cors());

if (!isDevelopmentMode) {
  app.use(express.static(path.resolve(__dirname, './frontend/dist')));
  app.get('/', async (_, res) => {
    res.json({
      message: 'SLOVE backend is running!',
    })
  })
  console.log("is production mode.");
} else {
  app.get('/*', async (_, res) => {
    res.json({
      message: 'SLOVE backend is running!',
    })
  })
  console.log("is development mode.");
}

// app.get('/*', async (_, res) => {
//   res.json({
//     message: 'SLOVE backend is running!',
//   })
// })

app.listen(PORT, () => {
  console.log(`Server started and listening on port ${PORT} 🔥`);
  isDevelopmentMode && console.log("http://localhost:4000");
});
