  function writePagination(organizedNewsList){
    let paginationElement = document.getElementById("pagination");
    let paginationItem;
    let paginationNumberToShow;

    for (let index=0; index < organizedNewsList.length; index++){
      paginationNumberToShow = index + 1;
      paginationItem = `<div id=pag-${paginationNumberToShow} >${paginationNumberToShow}</div>`;

      paginationElement.insertAdjacentHTML("beforeend", paginationItem);
    }

    //set the first element as Active
    document.getElementById("pag-1").setAttribute("class", "is-active")
  }

  function changePage(){
    //looks for pagination elements by ID and adds a clickEvent witch render news according to pagination ID 
    Array.from(document.querySelectorAll("[id^='pag-']")).forEach(element => {
      indexOfPage = element.id.replace("pag-", "");
      element.addEventListener("click", renderNewsOnHTML(organizedNews, indexOfPage))
    });
  }