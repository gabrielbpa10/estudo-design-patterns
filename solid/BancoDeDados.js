// PRINCIPIO DE RESPONSABILIDADE ÚNICA (SRP)

class BancoDeDados {
  constructor() {
    this.url = 'https://meubanco.com';
    this.port = 8080;
  }

    conectar() {   
        console.log(`Conectando ao banco de dados em ${this.url}:${this.port}...`);
    }
}