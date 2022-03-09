
const content = {
  "news": [
    {
      "title": "Titulo da noticia",
      "excerpt": "Resumo da notícia",
      "image": "path/to/image.jpg",
      "url": "path/to/article",
      "categories": [
        {
          "name": "Categoria 1",
          "slug": "categoria_1"
        }
      ]
    },
    {
      "title": "Titulo da noticia",
      "excerpt": "Resumo da notícia",
      "image": null,
      "url": "path/to/article",
      "categories": []
    },
    {
      "title": "Titulo da noticia",
      "excerpt": "Resumo da notícia",
      "image": "path/to/image.jpg",
      "url": "path/to/article",
      "categories": [
        {
          "name": "Categoria 1",
          "slug": "categoria_1"
        },
        {
          "name": "Categoria 2",
          "slug": "categoria_2"
        }
      ]
    }
  ]
}


exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(content)
  });
};