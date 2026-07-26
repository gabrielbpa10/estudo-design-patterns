from entity.caminhao import Caminhao
from controller.logistica import Logistica


class LogisticaRodoviaria(Logistica):

    def __init__(self, transporte=None):
        self.transporte = transporte

    def criar_transporte(self):
        return self.transporte

    def enviar_localizacao(self):
        print("Localização enviada.")