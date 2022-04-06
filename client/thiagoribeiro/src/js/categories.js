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

function renderCategorieList(categoriesObject){
  let categoriesListElement = document.getElementById("categories-list");

  Object.entries(categoriesObject).forEach(([key, value]) => {
    //create <a> tag
    let categorieItemAnchor = document.createElement("a");
    categorieItemAnchor.setAttribute("href", "#");
    categorieItemAnchor.innerText = key;
    //create <li> tag and append the <a>
    let categorieItem = document.createElement("li");
    categorieItem.classList.add("flex-item");
    categorieItem.appendChild(categorieItemAnchor);

    categoriesListElement.appendChild(categorieItem);
  });
};