const express = require("express");
const app = express();
app.use(express.json());

const {planets} = require("./planetDatabase");

app.get(`/api/planets`, (req, res) => {
  res.status(200).json({ success: true });
});

app.get(`/api/planets/:id`, (req, res) => {
  const { id } = req.params;
  const planet = planets.find((planet) => planet.id === Number(id));
  res.json({ success: true, data: planet });
});

app.post(`/api/planets`, (req, res) => {
  console.log(req.body);
  const newPlanet = req.body;
  planets = [...planets, newPlanet]
  res.status(200).json({ succes: true, data: planets });
});

app.put(`/api/planets/:id`, (req, res) => {
  const { id } = req.params;
  const planet = req.body;
  planets[Number(id) - 1] = planet;
  res.status(200).json({ success: true });
});

app.delete(`/api/planets/:1`, (req, res) => {
  const { id } = req.params;
  const index = planet.findIndex((planet) => planet.id === id);
  planet.slice(index, 0);
  res.status(200).json({ success: true });
});

app.listen(3000,()=>{
  console.log("server listening")
});
