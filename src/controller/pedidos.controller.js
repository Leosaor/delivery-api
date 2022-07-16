import PedidosService from '../services/pedidos.services.js';

async function criarPedidos(req, res, next) {
    try {
        let pedido = req.body;
        if (!pedido.cliente || !pedido.produto || pedido.valor == null) {
            throw new Error(
                'Nome do Cliente, nome do produto e valor são campos obrigatórios.'
            );
        }
        pedido = await PedidosService.criarPedido(pedido);
        res.send(pedido);
    } catch (err) {
        next(err);
    }
}

async function atualizarPedidos(req, res, next) {
    try {
        const pedido = req.body;
        if (
            !pedido.id ||
            !pedido.cliente ||
            !pedido.produto ||
            pedido.valor == null ||
            pedido.entregue == null
        ) {
            throw new Error(
                'ID, nome do cliente, nome do produto, valor e status do produto são obrigatórios.'
            );
        }
        res.send(await PedidosService.atualizarPedidos(pedido));
    } catch (err) {
        next(err);
    }
}

async function attStatusEntrega(req, res, next) {
    try {
        const pedido = req.body;
        if (!pedido.id || pedido.entregue == null) {
            throw new Error('ID e status da entrega são obrigatórios.');
        }
        res.send(await PedidosService.attStatusEntrega(pedido));
    } catch (err) {
        next(err);
    }
}

async function deletePedidos(req, res, next) {
    try {
        if (!req.params.id) {
            throw new Error('ID é obrigatório.');
        }
        await PedidosService.deletePedidos(req.params.id);
        res.send(`Pedido ${req.params.id} deletado.`);
    } catch (err) {
        next(err);
    }
}

async function getPedidoPorId(req, res, next) {
    try {
        if (!req.params.id) {
            throw new Error('ID é obrigatório.');
        }
        res.send(await PedidosService.getPedidoPorId(req.params.id));
    } catch (err) {
        next(err);
    }
}

async function totalCliente(req, res, next) {
    try {
        const cliente = req.body.cliente;
        if (!cliente) {
            throw new Error('Cliente é obrigatório.');
        }
        res.send({ totalCliente: await PedidosService.totalCliente(cliente) });
    } catch (err) {
        next(err);
    }
}

async function totalProduto(req, res, next) {
    try {
        const produto = req.body.produto;
        if (!produto) {
            throw new Error('Produto é obrigatório.');
        }
        res.send({ totalProduto: await PedidosService.totalProduto(produto) });
    } catch (err) {
        next(err);
    }
}

async function maisVendidos(req, res, next) {
    try {
        res.send(await PedidosService.maisVendidos());
    } catch (err) {
        next(err);
    }
}

export default {
    criarPedidos,
    atualizarPedidos,
    attStatusEntrega,
    deletePedidos,
    getPedidoPorId,
    totalCliente,
    totalProduto,
    maisVendidos,
};
