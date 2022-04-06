function createsCategoriesObject(listOfNews){
  let categoriesObject = {
    "Sem Categoria": []
  };

  listOfNews.forEach(element => {
    let categoriesList = element.categories;

    if(categoriesList.length == "0"){
      categoriesObject["Sem Categoria"].push(element);

    } else {
      categoriesList.forEach(categorieElement => {
        let categorie = categorieElement.name;

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
  let HTMLCategoriesList = {};
  
  Object.entries(categoriesObject).forEach(([key, value]) => {
    // console.log(value)
    HTMLCategoriesList[key] = formatNewsElement(value);
    // console.log(HTMLCategoriesList[key])

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
        
        //write the page on HTML
        renderNews(HTMLCategoriesList[key]);
        addOrderBy(value);

        //adds the Active class to current clicked element
        element.currentTarget.classList.add("active");
      }
    });

    categoriesListElement.appendChild(categorieItem);
  });
};