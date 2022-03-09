# Jüssi Reader

Lembra do Google Reader? É tipo isso, só que juicier 🧃

Você deverá implementar um web app responsivo (desktop e mobile), de acordo com o layout definido no escopo, utilizando como base as informações contidas nas APIs fornecidas.

## Layout da interface

![Jüssi Reader Wireframe](src/images/jussi_reader_wireframe.png)

## URLs dos endpoints da API: 
- [GET] https://jussi-reader.netlify.app/.netlify/functions/news-one
- [GET] https://jussi-reader.netlify.app/.netlify/functions/news-two

## Requisitos mínimos:
- Implementar layout responsivo para mobile e desktop.
- Implementar menu de categorias para filtragem de artigos.
- Implementar menu de ordenação de artigos por ordem alfabética (titulo) ou cronológica (data).
- Implementar a exibição dos 6 (seis) primeiros artigos na home do web app. Para cada artigo, as informações a serem exibidas serão:
    - título;
    - resumo;
    - categorias (caso possua);
    - imagem destacada (caso possua)
    - data de publicação.
- Implementar uma busca simples de acordo com o título do artigo.
- Implementar paginação de artigos no rodapé da página.
- Os artigos devem conter link com a URL da notícia original.

## Desafios extras:
- Implementar cache local do conteúdo dos artigos, visando o funcionamento offline. 
- Implementar opção de adicionar dinamicamente novos endpoints (APIs) de artigos.
- Implementar a funcionalidade de salvar artigo como favorito. 
- Implementar transições e animações de interface (ex.: ao carregar a página, ao realizar a paginação, etc)

## Estrutura de diretório
Você deverá adicionar todo o código necessário da sua aplicação (HTML, CSS, JS, etc) em um novo diretório com seu nome de usuário em `./jussi-reader/client/`. Por exemplo, `./jussi-reader/client/mariozuany/`.

## Fluxo de Git

- A primeira coisa que você deverá fazer é criar uma release branch utilizando seu nome de usuário, partr da `master` Por exemplo, `release/mariozuany`. Esta branch servirá como o namespace do seu projeto.
- Quando for implementar uma funcionalidade, crie uma feature branch a partir da sua release branch, utilizando a nomenclatura `feature/seu-username-titulo-da-feature`. Por exemplo, `feature/mariozuany-article-sorting`.
- Comite e envie seus arquivos (push) para o repositório com a maior frequência possível.
- Assim que finalizar a implementação de uma funcionalidade, abra um pull request e escolha pelo menos dois colegas para avaliarem seu código.
- Dê instruções claras e precisas na descrição do seu pull request. Ex.: o que deverá ser testado e como fazê-lo.
- Antes de enviar seu pull request, confira se o código está realmente funcionando – ou seja, que é testável –, mesmo que a funcionalidade implementada ainda não esteja completamente finalizada.
- Quanto menores (mais atômicos) forem seus pull requests, melhor. Isso facilita a vida de quem irá avaliar seu código e permite feedbacks mais rápidos. 

## Importante
Por favor, não utilize nenhum framework (react, vue, etc) ou biblioteca (jquery, lodash, etc) para implementar este projeto. A ideia deste projeto é que você possa fixar os conhecimentos adquiridos de JavaScript nos últimas semanas e tirar eventuais dúvidas que tiver no seu desenvolvimento. :)


