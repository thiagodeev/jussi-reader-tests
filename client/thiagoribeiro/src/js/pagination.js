  function writePagination(organizedNewsList){
    let newsListMainDiv = document.getElementById("newsList");
    let paginationElement = document.getElementById("pagination");
    let paginationItem, paginationNumber;

    //remove previous paginations. Faster to remove content than .innerHTML=""
    while (paginationElement.firstChild) {paginationElement.removeChild(paginationElement.lastChild);}

    for (let index=0; index < organizedNewsList.length; index++){
      paginationNumber = index + 1;

      paginationItem = document.createElement("div");
      paginationItem.setAttribute("data-pagination", index);
      paginationItem.innerText = paginationNumber;
      paginationItem.addEventListener("click", element => {
        //faster to remove content than .innerHTML=""
        while (newsListMainDiv.firstChild) {newsListMainDiv.removeChild(newsListMainDiv.lastChild);}

        renderNewsOnHTML(organizedNewsList, element.currentTarget.dataset.pagination);
      });

      paginationElement.appendChild(paginationItem);
    }

    //set the first element as Active
    //document.getElementById("pag-1").setAttribute("class", "is-active")
  }

  // function changePage(){
  //   //looks for pagination elements by ID and adds a clickEvent witch render news according to pagination ID 
  //   Array.from(document.querySelectorAll("[id^='pag-']")).forEach(element => {
  //     indexOfPage = element.id.replace("pag-", ""); //gets only the number on ID to use as Index
  //     element.addEventListener("click", renderNewsOnHTML(organizedNews, indexOfPage));
  //   });
  // }