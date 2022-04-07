function addSearch(allNewsInHTMLFormat){
  let input = document.getElementById("searchbar");
  let searchResult = [];
  
  input.addEventListener("input", (input) => {
    searchResult = [];
    //get input value and remove white spaces
    let valueOfInput = input.target.value.replace(/\s+/g, '').toUpperCase();

    allNewsInHTMLFormat.forEach(element => {
      //get title value and remove white spaces
      let newsTitle = element.getElementsByClassName("newsList__news__title")[0].innerText.replace(/\s+/g, '').toUpperCase();
      
      if (newsTitle.indexOf(valueOfInput) > -1){
        searchResult.push(element);
      };
    });
    if(searchResult.length > 0){
      renderNews(searchResult);
      addOrderBy(searchResult);
    } else {
      document.getElementById("newsList").innerHTML = "<h2 class='search-error'>Nenhum resultado encontrado :/</h2>";
      document.getElementById("pagination").innerHTML = "";
    }
  });
};