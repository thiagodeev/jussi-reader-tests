;(async function main (){

  const numberOfNewsPerPage = 6;
  const newsFromAPI = await fetchAPI(newsURLs);

  let listOfAllAPINews = getAllNewsOf(newsFromAPI);

  function makePagination(list, paginationNumber){
    let counter = 0;

    let teste = list;
    console.log(teste);
    let testando = teste.slice(0, 6);
    console.log(testando);

    console.log(teste);
    teste.splice(6, 0);
    console.log(teste);

    testando = teste.slice(0, 6);
    console.log(testando);
    // for (const [index, value] of list.entries()){
    //   if(index)
    // }
  }

  let newsGroupByPage = makePagination(listOfAllAPINews, numberOfNewsPerPage);
  console.log(newsGroupByPage);

  console.log(listOfAllAPINews)
  writeNewsOnHTML(listOfAllAPINews);
  
  //get all the News in HTML format
  // let allHTMLNews = Array.from(document.getElementsByClassName("newsList__news"));

  // console.log(allHTMLNews)
})();


