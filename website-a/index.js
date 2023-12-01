const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const port = 3000;

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(cors());
app.use(jsonParser);
app.use(urlencodedParser);

app.get("/", (req, res) => {
  res.json("website-a");
});

app.post("/test", (req, res) => {
  if (req.body.secret !== "secret123") {
    return res.status(403).json({ error: "Secret is not valid" });
  }

  console.log("Incoming Webhook");
  res.json("");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});