import Pagamento from './Pagamento.js';

export default class PagamentoAvista extends Pagamento {
  constructor(id, valor, data) {
    super(id, valor, data);
    this.status = 'pendente';
    this.total = 0;
  }

  pagar() {
    this.status = 'pago';
    this.total = this.valor;
    console.log(`Pagamento de ${this.valor} realizado com sucesso à vista! status: ${this.status} `);
  }
}