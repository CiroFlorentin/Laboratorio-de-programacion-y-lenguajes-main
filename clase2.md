# Funcion de Orden Superior
* Pueden ser asignadas a una constante, variable y estar dentro de un objeto
* Pueden pasarse como parametros a otras funciones
* Pueden retomar una función 

```
const f = (x) => x+1
f(3) = ???
const fp = (fn, value)=> fn(value)+2
fp(f,3) ???
```
Se puede pasar a una funcion, otra funcion
```
const exec = (x,y,f)=> f(x,y)
exec(5,3,(x,y)=>x-y)  # = 2
exec(5,3,(x,y)=>x+y) # = 8

const miFuncion = (x,y)=>x*y

exec (5,3,miFuncion) # = 15
```

```
const a = [8,9,6,3,4]

const a.filter((x)=>(x%2) == 0);  
```