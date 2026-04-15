# Laboratorio de programación y lenguajes

API REST en **Node.js** y **Express** que expone un catálogo de productos almacenado en JSON. Pensada como práctica de backend: rutas, parámetros, consultas y respuestas JSON uniformes.

## Requisitos

- [Node.js](https://nodejs.org/) (versión LTS recomendada)
- npm (incluido con Node)

## Instalación

```bash
git clone https://github.com/CiroFlorentin/Laboratorio-de-programacion-y-lenguajes.git
cd Laboratorio-de-programacion-y-lenguajes
npm install
```

## Uso

| Comando      | Descripción                          |
|-------------|--------------------------------------|
| `npm start` | Inicia el servidor con Node          |
| `npm run dev` | Desarrollo con recarga automática (nodemon) |

Por defecto el servidor escucha en el **puerto 3001**.

## Endpoints

Todas las respuestas siguen un formato común: `message`, `status` (`success` o `error`) y `data`.

### Productos

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/productos` | Lista todos los productos |
| `GET` | `/productos/:idProducto` | Un producto por ID numérico |

- Si el ID no es un número → **400** con mensaje de ID no válido.
- Si no existe el producto → **404**.

### Categorías

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/categorias` | Lista de categorías únicas (derivadas de todos los productos) |
| `GET` | `/categorias/find?categoria=<nombre>` | Productos que incluyen esa categoría |

- Si no hay productos con la categoría indicada → **404**.

**Ejemplo:** `http://localhost:3001/categorias/find?categoria=tecnologia`

## Datos

Los productos viven en `data/productos.json`. Cada ítem incluye campos como:

- `id` (número)
- `nombre`
- `precio`
- `categorias` (array de strings)
- `stock`

## Tecnologías

- [Express](https://expressjs.com/) 5.x
- [nodemon](https://nodemon.io/) (solo desarrollo)

## Licencia

ISC — ver `package.json`.

## Autor

**CiroFlorentin**

- Repositorio: [github.com/CiroFlorentin/Laboratorio-de-programacion-y-lenguajes](https://github.com/CiroFlorentin/Laboratorio-de-programacion-y-lenguajes)
