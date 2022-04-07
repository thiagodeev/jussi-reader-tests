isTheSearchEventAddedForTheFirstTime = false;

function searchEvent(input){
  input.target.searchResult = [];
  //get input value and remove white spaces
  let valueOfInput = input.target.value.replace(/\s+/g, '').toUpperCase();

  input.target.allNewsInHTMLFormat.forEach(element => {
    //get title value and remove white spaces
    let newsTitle = element.getElementsByClassName("newsList__news__title")[0].innerText.replace(/\s+/g, '').toUpperCase();
    
    if (newsTitle.indexOf(valueOfInput) > -1){
      input.target.searchResult.push(element);
    };
  });
  if(input.target.searchResult.length > 0){
    renderNews(input.target.searchResult);
    addOrderBy(input.target.searchResult);
  } else {
    document.getElementById("newsList").innerHTML = "<h2 class='search-error'>Nenhum resultado encontrado :/</h2>";
    document.getElementById("pagination").innerHTML = "";
  }
}

function addSearch(allNewsInHTMLFormat){
  let input = document.getElementById("searchbar");
  let searchResult = [];

  input.allNewsInHTMLFormat = allNewsInHTMLFormat;
  input.searchResult = searchResult;
  
  if(isTheSearchEventAddedForTheFirstTime){
    input.removeEventListener('input', searchEvent, true);
  }

  input.addEventListener("input", searchEvent, true);

  isTheSearchEventAddedForTheFirstTime = true;
};