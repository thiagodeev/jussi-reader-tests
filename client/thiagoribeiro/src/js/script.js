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

  function renderOrdenedByTitle(elementToRender){

  }

  let newsOrganizedByTitle = orderByTitle(allAPINews);
  let HTMLnewsOrganizedByTitle = formatNewsElement(newsOrganizedByTitle);
  let orderByTitleElement = document.getElementById("orderByTitle");
  orderByTitleElement.addEventListener("click", element => {
    document.getElementById("orderByDate").removeAttribute('class');
    
    if(!element.currentTarget.classList.contains("active")){
      renderNews(HTMLnewsOrganizedByTitle);
      
      element.currentTarget.classList.add("active");
    };
  });

  // let newsOrganizedByTitle = orderByTitle(allAPINews);
  // let HTMLnewsOrganizedByTitle = formatNewsElement(newsOrganizedByTitle);
  // let orderByTitleElement = document.getElementById("orderByTitle");
  // orderByTitleElement.addEventListener("click", element => {
  //   document.getElementById("orderByDate").removeAttribute('class');
    
  //   if(!element.currentTarget.classList.contains("active")){
  //     renderNews(HTMLnewsOrganizedByTitle);
      
  //     element.currentTarget.classList.add("active");
  //   };
  // });

  let newsOrganizedByDate = orderByDate(allAPINews);
  let HTMLnewsOrganizedByDate = formatNewsElement(newsOrganizedByDate);
  let orderByDateElement = document.getElementById("orderByDate");
  orderByDateElement.addEventListener("click", element => {
    document.getElementById("orderByTitle").removeAttribute('class');

    if(!element.currentTarget.classList.contains("active")){
      renderNews(HTMLnewsOrganizedByDate);
      
      element.currentTarget.classList.add("active");
    };
  });

})();


