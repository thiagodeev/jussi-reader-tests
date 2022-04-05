;(async function main (){
  const numberOfNewsPerPage = 6;
  const newsFromAPI = await fetchAPI(newsURLs);

  let listOfAllAPINews = getAllNewsOf(newsFromAPI);
  console.log(listOfAllAPINews)
  let allNewsInHTML = createsHTMLNewsFrom(listOfAllAPINews);
  let organizedNews = divideTheArray(allNewsInHTML, numberOfNewsPerPage);

  renderNewsOnHTML(organizedNews);

  writePagination(organizedNews);

  // let teste = orderByTitle(listOfAllAPINews);
  // let teste1 = createsHTMLNewsFrom(teste);
  // let teste2 = divideTheArray(teste1, numberOfNewsPerPage);

  // renderNewsOnHTML(teste2);

  // writePagination(teste2);
})();


