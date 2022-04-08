function createsCategoriesObject(listOfNews){
  let categoriesObject = {
    "Sem Categoria": []
  };

  listOfNews.forEach(element => {
    let categoriesList = element.getElementsByClassName("newsList__news__categories")[0];

    if(categoriesList.childElementCount == 0){
      categoriesObject["Sem Categoria"].push(element);

    } else {
      Array.from(categoriesList.children).forEach(categorieElement => {
        let categorie = categorieElement.innerText;

        if(!categoriesObject.hasOwnProperty(categorie)){
          categoriesObject[categorie] = [];
          categoriesObject[categorie].push(element);
        } else {
          categoriesObject[categorie].push(element);
        }
      });
    }
  })
  // console.log(categoriesObject)
  return categoriesObject;
}

function renderCategorieList(categoriesObject){
  let categoriesListElement = document.getElementById("categories-list");
  let categoriesListElement_2 = document.getElementById("categories-list-2");
  let listCounter = 0;

  Object.entries(categoriesObject).forEach(([key, value]) => {
    listCounter++;

    //create <a> tag
    let categorieItemAnchor = document.createElement("a");
    categorieItemAnchor.setAttribute("href", "#");
    categorieItemAnchor.innerText = key;
    //create <li> tag and append the <a>
    let categorieItem = document.createElement("li");
    categorieItem.classList.add("flex-item");
    categorieItem.appendChild(categorieItemAnchor);


    categorieItem.addEventListener("click", element => {
      if(!element.currentTarget.classList.contains("active")){
        // console.log(categorieElements)

        //removes the class Active from all categories items 
        for (let i=0; i < categoriesListElement.children.length; i++){
          categoriesListElement.children[i].classList.remove('active');
        }
        for (let i=0; i < categoriesListElement_2.children.length; i++){
          categoriesListElement_2.children[i].classList.remove('active');
        }
        
        //write the page on HTML
        renderNews(value);
        addOrderBy(value);
        addSearch(value)

        //adds the Active class to current clicked element
        element.currentTarget.classList.add("active");
      }
    });

    if(listCounter <= 3){
      categoriesListElement.appendChild(categorieItem);
    } else {
      categoriesListElement_2.appendChild(categorieItem);
    }
  });
};

function seeAllCategories(){
  let toggleButton = document.getElementById("show-all-categories");
  let categoriesWrapper =document.getElementById("categories-wrapper");

  toggleButton.addEventListener("click", element => {
    categoriesWrapper.classList.toggle("show-list");

    
    if(categoriesWrapper.classList.contains("show-list")){
      element.target.innerText = "Ocultar";
      console.log("oi")
    } else {
      element.target.innerText = "Ver mais";
      console.log("oilkl")
    }
  })
}