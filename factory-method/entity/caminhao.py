from interfaces.transporte import Transporte


class Caminhao(Transporte):

    def __init__(self, placa):
        self.placa = placa

    def entregar(self):
        print("Entrega realizada por um caminhão.")