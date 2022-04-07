;(async function main (){
  numberOfNewsPerPage = 6;

  const newsFromAPI = await fetchAPI(newsURLs);
  const allAPINews = getAllNewsOf(newsFromAPI);
  const allNewsInHTMLFormat = createsHTMLNewsFrom(allAPINews);

  renderNews = function (arrayToRender){
    const organizedNews = divideTheArray(arrayToRender, numberOfNewsPerPage);
    renderNewsOnHTML(organizedNews);
    writePagination(organizedNews);
  };
  renderNews(allNewsInHTMLFormat);
  addOrderBy(allNewsInHTMLFormat);
  addSearch(allNewsInHTMLFormat)

  //********** categories **********//
  renderCategorieList(createsCategoriesObject(allNewsInHTMLFormat));

  // let teste = createsHTMLNewsFrom(allAPINews);
  // console.log(teste)
  // search(teste);
  // //add click to title
  titleLink(allNewsInHTMLFormat);
})();


