export class PedidoService {
  constructor(bancoDeDados) {
    this.db = bancoDeDados;
  }

  async fechar(pedido, frete) {
    if (!pedido.email.remetente.includes('@')) throw new Error('email')
   
    if (frete.tipo === 'sedex') frete = pedido.kg * 10
    else if (frete.tipo === 'retirada') frete = 0
    else if (frete.tipo === 'drone') frete = pedido.kg * 15
    const total = pedido.total + frete
    
    // await this.db.query('INSERT INTO pedidos SET ?', { total })
    return { total, texto: 'Pedido fechado: ' + total }
 }

}