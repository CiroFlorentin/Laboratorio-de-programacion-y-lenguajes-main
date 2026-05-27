const fns = {
    stock: (p,v)=>{p.stock >= v},
    cate : (p,v)=>{p.categorias.includes(v)},
}

// const loadFns = (arr) => {
//     const res = arr.map((e)=>{
//         return (p) =>{fns[e.fn](p,e.value)}
//     })
// }
const makeFns = ({fn,value}) => {
    if (!fns[fn]) throw new Error('Funcion no encontrada')
    return (p)=> fns[fn](p,value)
}
module.exports = {
    makeFns
}