const express = require("express");
const cliente = require("./data/clientes.json");
const { validarDireccion } = require("./reglas/reglas-direcciones.js");
const app = express();
const PORT = 3000;

app.get("/direcciones-validas", (req, res) => {
  const resultado = clientes
    .filter((cliente) => validarDireccion(cliente.direccion))
    .map(({ id, direccion, ...resto }) => resto);

  res.json(resultado);
});

app.get("/direcciones-invalidas", (req, res) => {
  const resultado = clientes
    .filter((cliente) => !validarDireccion(cliente.direccion))
    .map(({ id, direccion, ...resto }) => resto);

  res.json(resultado);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
