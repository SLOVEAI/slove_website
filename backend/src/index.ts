import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import { isDevelopmentMode } from "./utils";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan("combined"));
app.use(bodyParser.json());

app.use(cors());

app.get('/', async (_, res) => {
  res.send({
    res: 'SLOVE backend is running!',
  })
})

app.listen(PORT, () => {
  console.log(`Server started and listening on port ${PORT} 🔥`);
  isDevelopmentMode && console.log("http://localhost:4000");
});
