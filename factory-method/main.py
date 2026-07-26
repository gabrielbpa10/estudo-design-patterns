from controller.logistica_rodoviaria import LogisticaRodoviaria
from entity.caminhao import Caminhao

if __name__ == "__main__":
    logistica = LogisticaRodoviaria(Caminhao("OPZ0448"))
    logistica.iniciar_entrega()
    print(logistica.transporte.placa)
    logistica.enviar_localizacao()
    logistica.finalizar_entrega()


# 1º CRIAR INTERFACE TRANSPORTE
# 2º CRIAR CLASSE CAMINHÃO IMPLEMENTANDO A INTERFACE TRANSPORTE
# 3º CRIAR INTERFACE LOGISTICA
# 4º CRIAR CLASSE LOGISTICA RODOVIARIA IMPLEMENTANDO A INTERFACE LOGISTICA
# 5º CRIAR FUNÇÃO INICIAR ENTREGA NA INTERFACE LOGISTICA
# 6º CRIAR NA MAIN.PY INSTANCIA DO TIPO DE LOGISTICA