;(async function main (){

  const numberOfNewsPerPage = 6;
  const newsFromAPI = await fetchAPI(newsURLs);
  let currentPage = 0;

  let listOfAllAPINews = getAllNewsOf(newsFromAPI);

  function divideTheArray(newsList, paginationNumber){
    let tempArray = Array.from(newsList);
    let organizedNewsList = [];
    
    while (tempArray.length) {
        organizedNewsList.push(tempArray.splice(0, paginationNumber));
    }

    return organizedNewsList;
  }

  let organizedNews = divideTheArray(listOfAllAPINews, numberOfNewsPerPage);
 
  console.log(organizedNews)

  renderNewsOnHTML(organizedNews, currentPage);
  writePagination(organizedNews);
  
  //get all the News in HTML format
  // let allHTMLNews = Array.from(document.getElementsByClassName("newsList__news"));

  // console.log(allHTMLNews)
})();


