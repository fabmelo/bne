# Teste BNE

## Sobre
Aplicação SPA desenvolvida com Angular em conjunto com o Angular Material como um teste para FrontEnd Job.

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

## Tecnologias
- Angular 10
- Angular Material 10
- JavaScript
- TypeScript
- CSS3 (SCSS)
- HTML5

## Instalação da Aplicação
Faça o clone da aplicação e instale os pacotes através dos comandos abaixo

## Login na Aplicação
Para realizar o login na aplicação use um dos dois dados abaixo:
- Usuário: admin Senha: 123456 
- Usuário: bne Senha: 123456

## Servidor de Desenvolvimento
Execute `ng serve` e navegue para `http://localhost:4200/`. A aplicação será carregada automaticamente.
```
git clone https://github.com/fabmelo/bne.git
```
```
cd bne
```
```
npm i
```

## Questões

### 1 - Como podemos reduzir/otimizar o tamanho dos arquivos JS gerados pela nossa aplicação angular, a fim de tornar a carga do site mais leve?
A modularização (chunk), compressão de arquivos (minification) e eliminação de ruído (tree shaking) para o ambiente de produção mostram-se uma ferramenta muito eficiente para um melhor aproveitamento de carga.

### 2 - Em quais casos você tomaria a decisão de utilizar uma gestão de estado centralizada para uma aplicação?
Quando preciso garantir que o fluxo de dados fluam em um único sentido, tendo assim maior controle sobre alterações de estado.
