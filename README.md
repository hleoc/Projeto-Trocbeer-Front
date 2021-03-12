# Boas vindas ao repositório do Projeto TROCBEER FRONT-END!

Aqui serão encontrados os detalhes de como o projeto foi estruturado. #vqv 🚀


## Cenário fictício

TROCBEER está lançando uma nova plataforma de delivery de cerverja. Nesta plataforma, desejamos listar os produtos cadastrados para venda, com a possibilidade de utilizar cupons com valores fixos e percentuais.

Desenvolver um mini-admin protegido por usuário e senha para gerenciamento dos produtos e
cupons.

## Instruções para a instalação do projeto:

1. Clone o repositório
  * `git clone `.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd Projeto-Trocbeer-`

2. Instale as dependências
  * `npm install`

3. Em outra aba do terminal renderize a aplicação do front-end
  * `npm start`


## O que foi desenvolvido no front-end

Nesse projeto é possível fazer o cadastramento e login de usuário administrador, onde apenas esse usúario poderá Acessar, Criar, Listar, Editar, Visualizar um produto ou cupom de desconto(ou `CRUD`, para os mais íntimos 😜).

Para realizar qualquer tipo de alteração no banco de dados, como cadastro, edição ou exclusão de produtos ou cupom será necessário autenticar-se. 

A autenticação deverá ser feita via `JWT`.


### Data de Entrega

O projeto tem até a seguinte data para ser entregue: `15/03/2021`.


### Cobertura de testes unitários

- Foram cobertos alguns recursos do código com testes unitários com Jest


### Requisitos realizados

- Front-end e back-end desacoplados



### Tecnologias utilizadas

- VSCode
- JavaScript
- React
- NodeJS
- MongoDB
- Postman
- Git/Github

### Melhorias Futuras

- Adicionar dados sensíveis ao arquivo de ambiente(.env)
- Criação de cupons que sejam válidos apenas para certas categorias ou marcas
- Carrinho de compras
- Application build / pipeline
- Distribuições para DEV e PROD
- Database migrations
- Servidor backend online com a aplicação rodando (https://www.000webhost.com)