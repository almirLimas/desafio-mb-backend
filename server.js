import express from "express";
import routes from "./routes/register.js";

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // ou coloque a origem exata ex: "http://localhost:5173"
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Para pré-voo OPTIONS
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
}),
  app.use(express.json());
app.use("/api", routes);

app.listen(3000, () => console.log("Servidor Rodandos"));
