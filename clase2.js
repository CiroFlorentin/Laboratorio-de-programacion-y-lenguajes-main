const a = [8,9,10,11]

const r = a.every(x => x>= 6)

const rSome = !a.some(x => x<5)


console.log(r)
console.log(rSome)


const validaciones = {
    stock : (value) => value >= 100,
    nombre : (value) => value.length > 5
}

console.log(validaciones.stock(150))
console.log(validaciones.nombre("JavaScript"))


const validaciones2 = {
    stock : (p,value) => p.stock >= value,
    nombre : (p,value) => p.nombre.length >= value,
    precio: (p,value) => p.precio <= value
}

const producto = [
    {stock:105,precio:1500,nombre:'prod1'},
    {stock:70,precio:800,nombre:'a1'},
    {stock:40,precio:2000,nombre:'prod2'},
    {stock:85,precio:1100,nombre:'a2'}
]

const filtro =[
    {fn : 'stock', value:50},
    {fn : 'precio', value:1500},
]

const fn = filtro.map(each => validaciones2[each.fn])

const r2 = producto.filter(p => fn.every((f,i) => f(p,filtro[i].value)))
console.log(r2)