;(async function main (){
  const numberOfNewsPerPage = 6;
  const newsFromAPI = await fetchAPI(newsURLs);

  let allAPINews = getAllNewsOf(newsFromAPI);

  function formatNewsElement(elementToFormat, numberOfNewsPerPage){
    let allNewsInHTMLFormat = createsHTMLNewsFrom(elementToFormat);
    let organizedNews = divideTheArray(allNewsInHTMLFormat, numberOfNewsPerPage);

    return organizedNews;
  }

  let organizedNews = formatNewsElement(allAPINews, numberOfNewsPerPage);
  
  function renderNews(arrayToRender){
    renderNewsOnHTML(arrayToRender);
    writePagination(arrayToRender);
  };
  
  renderNews(organizedNews);
})();


