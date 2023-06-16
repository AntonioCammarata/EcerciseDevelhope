const express = require("express");
const app = express();
app.use(express.json());

const planets = require("./planetDatabase");

app.get("/api/planets", (res, req) => {
  res.statusCode(200).json({ succes: true });
});

app.listen(3000);
