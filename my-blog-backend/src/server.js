import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.get("/hello", (req, res) => res.send("Hello!"));
app.get("/hello/:name", (req, res) => res.send(`hello ${req.params.name}`));
app.post("/hello", (req, res) => res.send(`hello! ${req.body.name}!`));

app.listen(8000, () => console.log("listening on port 8000"));
