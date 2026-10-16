import Pagamento from './Pagamento.js';

export default class PagamentoPix extends Pagamento {
  constructor(id, valor, data, chavePix) {
    super(id, valor, data);
    this.chavePix = chavePix;
    this.status = 'pendente';
    this.total = 0;
  }

  pagar() {
    this.status = 'pago';
    this.total = this.valor * 0.95;
    console.log(`Pagamento de ${this.valor} realizado com sucesso via Pix! status: ${this.status} total: ${this.total}  `);
  }
}