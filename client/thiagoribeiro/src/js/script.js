async function main (){
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
    addSearch(allNewsInHTMLFormat);
  
    //categories
    renderCategorieList(createsCategoriesObject(allNewsInHTMLFormat));
    seeAllCategories();
  };
  renderAll(allNewsInHTMLFormat);

  //add title click event 
  titleLink(allNewsInHTMLFormat);
  addNewAPI();
  //scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
main();

// window.addEventListener('load', (event) => {
//   addNewAPI()
//   console.log("load");
// });

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
