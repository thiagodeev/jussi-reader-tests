;(async function main (){
  const numberOfNewsPerPage = 6;
  const newsFromAPI = await fetchAPI(newsURLs);

  let listOfAllAPINews = getAllNewsOf(newsFromAPI);

  let allNewsInHTML = createsHTMLNewsFrom(listOfAllAPINews);

  let organizedNews = divideTheArray(allNewsInHTML, numberOfNewsPerPage);

  renderNewsOnHTML(organizedNews);

  writePagination(organizedNews);
})();


