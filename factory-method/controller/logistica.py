from abc import ABC, abstractmethod

class Logistica(ABC):
    @abstractmethod
    def criar_transporte(self):
        pass

    def iniciar_entrega(self):
        transporte = self.criar_transporte()
        transporte.entregar()

    def finalizar_entrega(self):
        print("Entrega finalizada!")