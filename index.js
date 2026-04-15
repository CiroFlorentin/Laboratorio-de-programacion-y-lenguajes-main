const express = require('express');
const productos = require('./data/productos.json');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;

console.log(PORT);

//PRODUCTOS
app.get('/productos', (req, res) => {
  res.status(200).json({
    message: 'Productos',
    status: 'success',
    data: productos,
  });
});
app.get('/productos/:idProducto', (req, res) => {
  const { idProducto } = req.params;
  if (isNaN(idProducto)) {
    res.status(400).json({
      message: 'ID no válido',
      status: 'error',
      data: null,
    });
  } else {
    const producto = productos.find((p) => p.id === Number(idProducto));
    if (!producto) {
      res.status(404).json({
        message: 'Producto no encontrado',
        status: 'error',
        data: null,
      });
    } else {
      res.status(200).json({
        message: 'Producto encontrado',
        status: 'success',
        data: producto,
      });
    }
  }
});

//CATEGORIAS
app.get('/categorias', (req, res) => {
  const categorias = productos.flatMap((p) => p.categorias);
  res.status(200).json({
    message: 'Categorias',
    status: 'success',
    data: [...new Set(categorias)],
  });
});

app.get('/categorias/find', (req, res) => {
  const { categoria } = req.query;
  const cat = productos.filter((p) => p.categorias.includes(categoria));

  if (cat.length === 0) {
    res.status(404).json({
      message: 'Categoria no encontrada',
      status: 'error',
      data: null,
    });
  } else {
    res.status(200).json({
      message: 'Productos por categoria',
      status: 'success',
      data: cat,
    });
  }
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error al iniciar el servidor: ${err}`);
    process.exit(1);
  }
  console.log(`La aplicación está corriendo en el puerto ${PORT}`);
});
