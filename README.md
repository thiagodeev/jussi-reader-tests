# Jüssi Reader

- Você deverá implementar um web app responsivo (desktop e mobile), de acordo com o layout definido no escopo utilizando como base as informações contidas nas APIs fornecidas.

## Layout da interface

../path/to/image.jpg

## URLs da API: 
- [GET] https://jussi-reader.netlify.app/.netlify/functions/api/news-one
- [GET] https://jussi-reader.netlify.app/.netlify/functions/api/news-two

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

# Importante
Por favor, não utilize nenhum framework (react, vue, etc) ou biblioteca (jquery, lodash, etc) para implementar este projeto. A ideia deste projeto é que você possa fixar os conhecimentos adquiridos de JavaScript nos últimas semanas e tirar eventuais dúvidas que tiver no seu desenvolvimento. :)