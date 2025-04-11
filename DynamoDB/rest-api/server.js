import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

// Needed to simulate __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.post("/hello", (req, res) => {
  const body = req.body;
  body.message = `Hello ${body.name}`;
  res.json(body);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
