const express = require('express');

const app = express();

//rota de teste
app.get('teste',(req,res)=>{
    return res.json({msg:"Hello World!"})
});

app.listen(2469);