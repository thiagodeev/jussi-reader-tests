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
    let categoriesListElement_2 = document.getElementById("categories-list-2");
    
    for (let i=0; i < categoriesListElement.children.length; i++){
      categoriesListElement.children[i].classList.remove('active');
    }
    for (let i=0; i < categoriesListElement_2.children.length; i++){
      categoriesListElement_2.children[i].classList.remove('active');
    };
  };
};

function addNewAPI(){
  let input = document.getElementById("input-api-link");
  let button = document.getElementById("submit-api-button");
  let APILink = "";
  
  button.addEventListener("click", async element => {
    element.preventDefault();
    
    APILink = input.value;
    newsURLs.push(APILink);
    
    const newsFromAPI = await fetchAPI(newsURLs);
    //update the offline news list
    localStorage.setItem('newsFromAPI', JSON.stringify(newsFromAPI));
    main();
  }, {once : true});
};