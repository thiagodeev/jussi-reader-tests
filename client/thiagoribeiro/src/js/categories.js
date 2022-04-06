function createsCategoriesObject(listOfNews){
  let categoriesObject = {
    "Sem Categoria": []
  };
  let newsInHTML = createsHTMLNewsFrom(listOfNews);

  newsInHTML.forEach(element => {
    let news = element.getElementsByClassName("newsList__news__categories")[0];

    if(news.childElementCount == "0"){
      categoriesObject["Sem Categoria"].push(news);

    } else {
      let teste = [...news.children].forEach(element => {
        let categorie = element.innerText;

        if(!categoriesObject.hasOwnProperty(categorie)){
          categoriesObject[categorie] = [];
          categoriesObject[categorie].push(news);
        } else {
          categoriesObject[categorie].push(news);
        }
      });
    }
  })

  return categoriesObject;
}