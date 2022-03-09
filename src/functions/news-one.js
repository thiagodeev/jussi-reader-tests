

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
  'Content-Type': 'application/json',
};

const content = {
  "news": [
    {
      "title": "Titulo da noticia",
      "excerpt": "Resumo da notícia",
      "image": "path/to/image.jpg",
      "url": "path/to/article",
      "date": "02/10/2022",
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
      "date": "02/10/2022",
      "categories": []
    },
    {
      "title": "Titulo da noticia",
      "excerpt": "Resumo da notícia",
      "image": "path/to/image.jpg",
      "url": "path/to/article",
      "date": "02/10/2022",
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
    headers,
    body: JSON.stringify(content)
  });
};