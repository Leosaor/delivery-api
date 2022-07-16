import express from 'express';
import cors from 'cors';
import PedidosRouter from './src/routes/pedidos.routes.js';

global.fileName = './src/data/pedidos.json';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/pedidos', PedidosRouter);

app.listen(3000, () => {
    console.log('Delivery API Iniciada!');
});
