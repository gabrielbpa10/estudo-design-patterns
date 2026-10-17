# 📚 Estudos de Design Patterns

Repositório pessoal de estudos sobre **padrões de projeto (Design Patterns)**, com exemplos práticos em diferentes linguagens de programação.

A proposta é aprender escrevendo código: entender os problemas que cada padrão ajuda a resolver, experimentar suas implementações e perceber como os recursos de cada linguagem influenciam a solução.

## 🎯 Objetivos

- Compreender a intenção de cada padrão e identificar situações em que sua aplicação faz sentido.
- Praticar organização de código, separação de responsabilidades e reutilização.
- Reforçar os fundamentos de Programação Orientada a Objetos (POO) e os princípios SOLID.
- Explorar implementações em várias linguagens, comparando suas características conforme os estudos evoluem.
- Registrar exemplos e aprendizados para consulta e revisão.

## 🧩 Conteúdo atual

| Tema | Linguagem | Exemplo |
| --- | --- | --- |
| [Factory Method](./factory-method/) | Python | Logística de entregas, com abstrações de transporte e implementação de caminhão. |
| [Programação Orientada a Objetos](./poo/) | JavaScript | Modalidades de pagamento: Pix, à vista e parcelado. |
| [Princípios SOLID](./solid/) | JavaScript | Exercícios com pedidos, frete, e-mail e serviço de fechamento de pedidos. |

Os exercícios de POO e SOLID complementam o estudo dos padrões de projeto, construindo uma base para compreender suas decisões de design.

## 🗂️ Organização

```text
estudo-design-patterns/
├── factory-method/   # Estudo de Factory Method em Python
├── poo/              # Fundamentos de orientação a objetos em JavaScript
├── solid/            # Exercícios sobre os princípios SOLID em JavaScript
├── LICENSE
└── README.md
```

## ▶️ Como executar

Você precisará de **Python 3** para o exemplo em Python e de **Node.js com suporte a módulos ES** para os exemplos em JavaScript. Os exemplos atuais utilizam recursos nativos dessas linguagens, sem dependências externas.

Na raiz do repositório, execute o exemplo desejado:

**Factory Method — Python**

```bash
python3 factory-method/main.py
```

**Programação Orientada a Objetos — JavaScript**

```bash
node poo/view/Main.js
```

**Princípios SOLID — JavaScript**

```bash
node solid/Main.js
```

## 📝 Proposta de estudo

Para cada tema, o objetivo é explorar o problema inicial, entender as responsabilidades das classes e avaliar os benefícios e os custos da solução. Os exemplos podem ser revisitados e refatorados à medida que o aprendizado avança.

Este é um **projeto exclusivamente educacional e em evolução**. As implementações representam etapas do estudo e podem conter simplificações ou pontos a melhorar.

## 📄 Licença

Este repositório possui uma [licença MIT](./LICENSE).
