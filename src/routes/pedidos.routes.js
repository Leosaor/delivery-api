import express from 'express';
import PedidosController from '../controller/pedidos.controller.js';

const router = express.Router();

router.post('/', PedidosController.criarPedidos);
router.put('/', PedidosController.atualizarPedidos);
router.get('/maisVendidos', PedidosController.maisVendidos);
router.patch('/atualizarEntrega', PedidosController.attStatusEntrega);
router.get('/totalPorCliente', PedidosController.totalCliente);
router.get('/totalPorProduto', PedidosController.totalProduto);
router.delete('/:id', PedidosController.deletePedidos);
router.get('/:id', PedidosController.getPedidoPorId);


router.use((err, req, res, next) => {
    res.send({ error: err.message });
});

export default router;
