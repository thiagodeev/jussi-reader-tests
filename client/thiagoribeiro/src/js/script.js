;(async function main (){
  numberOfNewsPerPage = 6;

  const newsFromAPI = await fetchAPI(newsURLs);
  const allAPINews = getAllNewsOf(newsFromAPI);
  allNewsInHTMLFormat = createsHTMLNewsFrom(allAPINews);

  renderNews = function (arrayToRender){
    const organizedNews = divideTheArray(arrayToRender, numberOfNewsPerPage);
    renderNewsOnHTML(organizedNews);
    writePagination(organizedNews);
  };

  renderAll = function (allNewsInHTMLFormat){
    renderNews(allNewsInHTMLFormat);
    addOrderBy(allNewsInHTMLFormat);
    addSearch(allNewsInHTMLFormat)
  
    //categories
    renderCategorieList(createsCategoriesObject(allNewsInHTMLFormat));
    seeAllCategories()
  

  };

  renderAll(allNewsInHTMLFormat);

})();

// addNewAPI();

window.addEventListener('load', (event) => {
  addNewAPI()
  console.log("load");
});
// //add click to title
// titleLink(allNewsInHTMLFormat);

// document.addEventListener('readystatechange', (event) => {
//   for( let i = 0; i < 2000000000; i++)
// {}
// console.log("readystate" + document.readyState);
// });

// document.addEventListener('DOMContentLoaded', (event) => {
//   for( let i = 0; i < 2000000000; i++)
// {}
// console.log("DOMContentLoaded");
// });
