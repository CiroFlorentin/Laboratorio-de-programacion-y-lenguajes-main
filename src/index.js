const express = require("express");
const personajes = require("../data/personajes.json");
const validacion = require("./validaciones");
const { makeFiltro, op } = require("./filtros/filtros.js");
const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/personajes", (_, res) => {
  res.status(200).json(personajes);
});

app.post("/personajes/filtros", (req, res) => {
  try {
    const fns = req.body.map((e) =>
      makeFiltro(e.attribute, e.operator, e.value),
    );
    const data = personajes.filter((p) => fns.every((f) => f(p)));
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post("/personajes", (req, res) => {
  const data = req.body;
  if (!validacion(data)) {
    return res.status(400).json("Los datos enviados no son correctos.");
  }

  const ids = personajes.map((p) => p.id);
  const id = Math.max(0, ...ids) + 1;
  const personaje = { id, ...data, activo: true };
  personajes.push(personaje);
  res.status(201).json(personaje);
});

app.listen(PORT, (err) => {
  if (err) {
    console.error("Hubo un error: " + err.message);
    process.exit(1);
  }
  console.log(`🚀 Aplicacion iniciada con exito en el puerto ${PORT}.`);
});
