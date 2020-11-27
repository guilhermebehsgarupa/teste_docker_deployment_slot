import {Request, Response, Router} from 'express';

const rotas = Router();
const dados = [
    {
    'nome':'Guilherme Behs',
    'nascimento':'1993-03-21'
    }
]


rotas.get('/', async(req: Request, res: Response)=>{

    const usuarios = {};

    res.json(dados)          
})

rotas.get('/create', async(req: Request, res: Response)=>{
     
    dados.push({'nome':"Karol Guerini", 'nascimento':'1991-01-02'})

    res.json('Criado');

})


rotas.get('/health',(req: Request, res: Response)=>{
    res.json('Done')          
})


export default rotas;