import express from 'express';

const app = express();

app.get('/health',(req,res)=>{
   
    res.json('ok')
})

app.listen(3000, ()=>console.log('Escutando na porta 3000'));