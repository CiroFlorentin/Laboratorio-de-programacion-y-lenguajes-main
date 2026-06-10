const op = require("./src/filtros/filtros.js").op;

const f = (x) => {
  const z = x * x;
  return (y) => y + z;
};

const save = f(4);
console.log(save(4));
console.log(save(5));
console.log(op["=="](4, 4));
console.log(op["<"](4, 4));
console.log(op["includes"]([4, 5, 6], 5));
console.log(op["includes"]([4, 5, 6], 7));
