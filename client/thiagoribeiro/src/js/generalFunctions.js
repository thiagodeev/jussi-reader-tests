function deleteChildElements(element){
  //Faster to remove content than .innerHTML=""
  while (element.firstChild) {element.removeChild(element.lastChild);};
};

function titleLink(organizedNews){
  document.getElementById("title").onclick= function(){
    renderNews(organizedNews);
    addOrderBy(organizedNews);
    addSearch(organizedNews);
    
    //remove Active class from categories
    let categoriesListElement = document.getElementById("categories-list");

    for (let i=0; i < categoriesListElement.children.length; i++){
      categoriesListElement.children[i].classList.remove('active');
    }
  }
}

function addNewAPI(){
  let input = document.getElementById("input-api-link");
  let button = document.getElementById("submit-api-button");
  let APILink = "";
  
  button.addEventListener("click", element => {
    element.preventDefault();
    

    APILink = input.value;
    console.log(input.value);
    newsURLs.push(APILink);
    console.log(newsURLs);
    main();
  });
}