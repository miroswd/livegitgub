const express = require('express');

const app = express();

//rota de teste
app.get('teste',(req,res)=>{
    //return res.json({msg:"Hello World!"})
    //Fazendo alteração para modificar no git
    return res.json({hello:"World!"}) 
});

app.listen(2469);