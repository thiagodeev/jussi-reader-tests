;(async function main (){
  numberOfNewsPerPage = 6;

  const newsFromAPI = await fetchAPI(newsURLs);

  let allAPINews = getAllNewsOf(newsFromAPI);

  function formatNewsElement(elementToFormat){
    const allNewsInHTMLFormat = createsHTMLNewsFrom(elementToFormat);
    const organizedNews = divideTheArray(allNewsInHTMLFormat, numberOfNewsPerPage);

    return organizedNews;
  };

  let organizedNews = formatNewsElement(allAPINews);
  
  // let orderByDateElement = document.getElementById("orderByDate");
  // orderByDateElement.addEventListener("click", addEvent, true);
  // let orderByTitleElement = document.getElementById("orderByTitle");
  // orderByTitleElement.addEventListener("click", function addEvent(){console.log("hi")});

  function renderNews(arrayToRender){
    renderNewsOnHTML(arrayToRender);
    writePagination(arrayToRender);
  };
  
  renderNews(organizedNews);
  addOrderBy(allAPINews, formatNewsElement, renderNews);

  //********** categories **********//
  let categoriesObject = createsCategoriesObject(allAPINews);
  renderCategorieList(categoriesObject, formatNewsElement, renderNews);

  let teste = createsHTMLNewsFrom(allAPINews);
  console.log(teste)
  search(teste);
  //add click to title
  titleLink(organizedNews, allAPINews, formatNewsElement, renderNews);
})();


