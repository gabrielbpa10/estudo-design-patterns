import Pagamento from './Pagamento.js';

export default class PagamentoParcelado extends Pagamento {
  constructor(id, valor, data, parcelas) {
    super(id, valor, data);
    this.parcelas = parcelas;
    this.status = 'pendente';
    this.total = 0;
  }

  pagar() {
    if(this.parcelas > 3) {
      throw new Error('Número de parcelas não pode ser maior que 3.');
    }
    this.status = 'pago';
    this.total = this.valor + (this.valor * 0.1);
    console.log(`Pagamento de ${this.valor} realizado com sucesso em ${this.parcelas} parcelas! status: ${this.status} `);
  }
}