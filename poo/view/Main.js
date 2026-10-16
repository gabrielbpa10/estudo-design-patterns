import PagamentoPix from '../model/PagamentoPix.js';
import PagamentoParcelado from '../model/PagamentoParcelado.js';
import PagamentoAvista from '../model/PagamentoAvista.js';

const pagamentoA = new PagamentoPix(1, 100, new Date(), 'chave-pix-exemplo');
const pagamentoB = new PagamentoParcelado(2, 200, new Date(), 4);
const pagamentoC = new PagamentoAvista(3, 300, new Date());

pagamentoA.pagar();
pagamentoB.pagar();
pagamentoC.pagar();