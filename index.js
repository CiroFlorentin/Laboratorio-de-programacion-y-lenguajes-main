// const express = require('express');
// const productos = require('./data/productos.json');
// require('dotenv').config();
// const app = express();
// const PORT = process.env.PORT || 3000;

// //PRODUCTOS
// app.get('/productos', (req, res) => {
//   res.status(200).json({
//     message: 'Productos',
//     status: 'success',
//     data: productos,
//   });
// });
// app.get('/productos/:idProducto', (req, res) => {
//   const { idProducto } = req.params;
//   if (isNaN(idProducto)) {
//     res.status(400).json({
//       message: 'ID no válido',
//       status: 'error',
//       data: null,
//     });
//   } else {
//     const producto = productos.find((p) => p.id === Number(idProducto));
//     if (!producto) {
//       res.status(404).json({
//         message: 'Producto no encontrado',
//         status: 'error',
//         data: null,
//       });
//     } else {
//       res.status(200).json({
//         message: 'Producto encontrado',
//         status: 'success',
//         data: producto,
//       });
//     }
//   }
// });

// //CATEGORIAS
// app.get('/categorias', (req, res) => {
//   const categorias = productos.flatMap((p) => p.categorias);
//   res.status(200).json({
//     message: 'Categorias',
//     status: 'success',
//     data: [...new Set(categorias)],
//   });
// });

// app.get('/categorias/find', (req, res) => {
//   const { categoria } = req.query;
//   const cat = productos.filter((p) => p.categorias.includes(categoria));

//   if (cat.length === 0) {
//     res.status(404).json({
//       message: 'Categoria no encontrada',
//       status: 'error',
//       data: null,
//     });
//   } else {
//     res.status(200).json({
//       message: 'Productos por categoria',
//       status: 'success',
//       data: cat,
//     });
//   }
// });

// app.listen(PORT, (err) => {
//   if (err) {
//     console.log(`Error al iniciar el servidor: ${err}`);
//     process.exit(1);
//   }
//   console.log(`La aplicación está corriendo en el puerto ${PORT}`);
// });

// Clase Pre-Parcial----------------------------------------------
// MÉTODO (OK) | (ERROR)
// GET (200) | (404)
// POST (201) | (400)
// DELETE (200) | (404)
// PUT (200) | (400) (404)

// Https ->(protocolo)\\localhost:puerto
// Puertos por default 80
// Https : 443

// INSTALAR EXPRESS
//Creación de un servidor

const materias = require('./data/materia.json');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;
app.use(express.json()); // Define el formato json para recibir información en un POST
// ENDPOINTS -----------------------------------
// app.verbo(ruta,función)

app.post('/materias', (req, res) => {
  const { cod, nombre } = req.body;
  if (!cod || !nombre) {
    res.status(400).json({
      message: 'Faltan datos',
      status: 'error',
      data: null,
    });
  } else {
    materias.push({
      id: Math.floor(Math.random() * (300 - 1 + 1)) + 1,
      cod,
      nombre,
    });
    res.status(201).json({
      message: 'Materia agregada',
      status: 'success',
      data: { cod, nombre },
    });
  }
});
app.get('/materias/:id', (req, res) => {
  const { id } = req.params;
  const materia = materias.filter((e) => e.id.includes(id));
  if (!materia) {
    res.status(404).json({
      message: 'Materia no encontrada',
      status: 'error',
      data: null,
    });
    return;
  }
  res.status(200).json({
    message: 'Materia encontrada',
    status: 'success',
    data: materia,
  });
});

app.get('/materias', (req, res) => {
  res.status(200).json({
    message: 'Materias',
    status: 'success',
    data: materias,
  });
});

// FIN ENDPOINTS -----------------------------------
app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error al iniciar el servidor: ${err}`);
    process.exit(1);
  }
  console.log(`La aplicación está corriendo en el puerto ${PORT}`);
});
