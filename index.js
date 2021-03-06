import express from "express";
import { routers } from "./src/routes/routers.js";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3009;
let __dirname = path.resolve(path.dirname(""));
app.use(express.json());
app.use(express.urlencoded());

console.log(__dirname);

app.set("view engine", "ejs");
app.use(routers);
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Estou rodando na porta ${port}`);
});
