POST -> crear recursos 201 -Create

```json
[
    {attr1:valor1},
    {attr2:valor2},
    {attr3:valor3}
]
```

```javascript
const express = require('express');
const app = express();
App.use(express.json());

async create(req,res)=>{
    const info = req.body //si qures desestructurar
    const {attr1,attr3} = req.body
}
```


GET -> consulta