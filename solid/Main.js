import { Email } from './Email.js'
import { Frete } from './Frete.js'
import { Pedido } from './Pedido.js'
import {PedidoService} from './PedidoService.js'

// Principio Interface Segregation Principle

const email = new Email('john@email.com', 'jane@email.com', 'Assunto do E-mail', 'Mensagem do E-mail')
const frete = new Frete('sedex', 10)
const pedido = new Pedido(email, frete, 5, 50)

console.log('Pedido:', pedido)

const pedidoService = new PedidoService("BancoDeDados")
pedidoService.fechar(pedido, frete)