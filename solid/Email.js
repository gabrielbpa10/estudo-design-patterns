 export class Email {
    constructor(remetente, destinatario, assunto, mensagem) {
        this.remetente = remetente;
        this.destinatario = destinatario;
        this.assunto = assunto;
        this.mensagem = mensagem;
    }

    enviar() {
        console.log(`Enviando e-mail de ${this.remetente} para ${this.destinatario} com o assunto "${this.assunto}" e a mensagem: "${this.mensagem}"`);
    }
}