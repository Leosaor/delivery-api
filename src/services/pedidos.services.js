import PedidosRepository from '../repositories/pedidos.repositories.js';

async function criarPedido(pedido) {
    return await PedidosRepository.addPedido(pedido);
}

async function atualizarPedidos(pedido) {
    return await PedidosRepository.atualizarPedidos(pedido);
}

async function attStatusEntrega(pedido) {
    return await PedidosRepository.attStatusEntrega(pedido);
}

async function deletePedidos(pedido) {
    return await PedidosRepository.deletePedidos(pedido);
}

async function getPedidoPorId(id) {
    return await PedidosRepository.getPedidoPorId(id);
}

async function totalCliente(cliente) {
    const pedidos = await PedidosRepository.getPedidos();
    const total = pedidos
        .filter((p) => p.cliente === cliente && p.entregue)
        .map((p) => p.valor)
        .reduce((acc, curr) => acc + curr, 0);
    return total;
}

async function totalProduto(produto) {
    const pedidos = await PedidosRepository.getPedidos();
    const total = pedidos
        .filter((p) => p.produto === produto && p.entregue)
        .map((p) => p.valor)
        .reduce((acc, curr) => acc + curr, 0);
    return total;
}

async function maisVendidos() {
    const pedidos = await PedidosRepository.getPedidos();
    const lista = [];
    pedidos.filter(p => p.entregue).forEach(p => {
        const index = lista.findIndex(a => a.produto === p.produto);
        if(index === -1){
            lista.push({produto: p.produto, quantidade: 1});
        }else{
            lista[index].quantidade++;
        }
    })
    lista.sort((a, b) => b.quantidade - a.quantidade);
    return lista;
}

export default {
    criarPedido,
    atualizarPedidos,
    attStatusEntrega,
    deletePedidos,
    getPedidoPorId,
    totalCliente,
    totalProduto,
    maisVendidos,
};
