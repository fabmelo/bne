# Teste BNE

## Development server

Execute `ng serve` e navegue para `http://localhost:4200/`. A aplicação será carregada automaticamente.

## Requisitos Funcionais
- Autenticação (Login/Logoff)
- Detalhes de usuário autenticado
- Lista e dados
- Ordenação de lista
- Filtro de lista
- Rolagem infinita 
- Botão copiar dados

## Requisitos Não Funcionais
- SPA Application
- Angular 2+
- Dados Mocados
- Escalabilidade
- Modularização
- Lazy Loading

## Questões

### 1 - Como podemos reduzir/otimizar o tamanho dos arquivos JS gerados pela nossa aplicação angular, a fim de tornar a carga do site mais leve?
A modularizacao (chunk), compressão de arquivos (minification) e eliminação de ruído (tree shaking) para o ambiente de produção mostram-se ferramente muito eficiente para um melhor aproveitamento de carga.

### 2 - Em quais casos você tomaria a decisão de utilizar uma gestão de estado centralizada para uma aplicação?
Quando preciso garantir que os dados fluam e um único sentido, tendo assim maior controle sobre alterações de estado. 
