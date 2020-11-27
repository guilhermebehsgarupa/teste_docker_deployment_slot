import express from 'express';
import rotas from './services';

const app = express();

app.use(rotas);

app.listen(3000, ()=>console.log('Escutando na porta 3000'));