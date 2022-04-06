;(async function main (){
  numberOfNewsPerPage = 6;
  const newsFromAPI = await fetchAPI(newsURLs);

  let allAPINews = getAllNewsOf(newsFromAPI);

  function formatNewsElement(elementToFormat){
    const allNewsInHTMLFormat = createsHTMLNewsFrom(elementToFormat);
    const organizedNews = divideTheArray(allNewsInHTMLFormat, numberOfNewsPerPage);

    return organizedNews;
  }

  let organizedNews = formatNewsElement(allAPINews);
  
  function renderNews(arrayToRender){
    renderNewsOnHTML(arrayToRender);
    writePagination(arrayToRender);
  };
  
  renderNews(organizedNews);

  //********** orderBy **********//
  let newsOrganizedByTitle = orderByTitle(allAPINews);
  let HTMLnewsOrganizedByTitle = formatNewsElement(newsOrganizedByTitle);
  renderHTMLListOrderedByTitle(HTMLnewsOrganizedByTitle, renderNews);
  
  let newsOrganizedByDate = orderByDate(allAPINews);
  let HTMLnewsOrganizedByDate = formatNewsElement(newsOrganizedByDate);
  renderHTMLListOrderedByDate(HTMLnewsOrganizedByDate, renderNews);

})();


