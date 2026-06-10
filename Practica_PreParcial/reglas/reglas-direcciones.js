const reglas = [
  // Longitud entre 20 y 60
  (direccion) => direccion.length >= 20 && direccion.length <= 60,

  // Debe contener algún número
  (direccion) => /\d+/.test(direccion),

  // Caracteres prohibidos
  (direccion) => !/[!@#$%^&*()_+]/.test(direccion),

  // Debe incluir alguna palabra requerida
  (direccion) => /(Calle|Avenida|Bulevar|Pasaje)/.test(direccion),

  // Código postal al final (si existe)
  (direccion) => {
    const cp = direccion.match(/\d{4,5}/g);

    if (!cp) return true;

    const ultimoCP = cp[cp.length - 1];

    return direccion.trim().endsWith(ultimoCP);
  },

  // Sin abreviaturas
  (direccion) => !/\bAv\./.test(direccion),

  // Primera letra de cada palabra en mayúscula
  (direccion) =>
    direccion
      .split(" ")
      .every((palabra) => palabra[0] === palabra[0].toUpperCase()),
];

const validarDireccion = (direccion) =>
  reglas.every((regla) => regla(direccion));

module.exports = { validarDireccion };
