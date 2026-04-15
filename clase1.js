const p1 = {
  nombre: 'Juan',
  apellido: 'Perez',
  edad: 30,
  residencia: {
    ciudad: 'Buenos Aires',
    pais: 'Argentina',
    calle: 'Calle Falsa',
    numero: 123,
  },
  esMayor: function (value) {
    return value >= 18;
  },
};

const al1 = { nombre: 'Martin', aprobadas: 21, tieneIngles: true };
const al2 = { nombre: 'Ludmila', aprobadas: 18, tieneIngles: true };
const al3 = { nombre: 'Carolina', aprobadas: 20, tieneIngles: false };

const alumnos = [al1, al2, al3];

// alumno with more than 20 approved subjects
for (let i = 0; i < alumnos.length; i++) {
  if (alumnos[i].aprobadas > 20) {
    console.log(alumnos[i].nombre + ' tiene muchas aprobadas');
  }
}

// Arrow function (filter)
const f = (alumno) => {
  const resultado = [];
  for (let i = 0; i < alumno.length; i++) {
    if (alumno[i].aprobadas >= 20 && alumno[i].tieneIngles) {
      resultado.push(alumno[i]);
    }
  }
  return resultado;
};
// Function traditional (filter)
function filtrar(value) {
  const resultado = [];
  for (let i = 0; i < value.length; i++) {
    if (value[i].aprobadas >= 20 && value[i].tieneIngles) {
      resultado.push(value[i]);
    }
  }
  return resultado;
}
// Filter method
const filtrando = alumnos.filter(
  (alumno) => alumno.aprobadas >= 20 && alumno.tieneIngles,
);
// other way to filter with arrow function
const falu = (alumno) => alumno.aprobadas >= 20 && alumno.tieneIngles;

console.log(f(alumnos));
console.log(filtrar(alumnos));
console.log(filtrando);
console.log(alumnos.filter(falu));
