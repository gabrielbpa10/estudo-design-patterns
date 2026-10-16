export default class Pagamento {
  constructor(id, valor, data) {
    this.id = id;
    this.valor = valor;
    this.data = data;
  }  

  pagar() {
    console.log(`Pagamento de ${this.valor} realizado com sucesso!`);
  }
}