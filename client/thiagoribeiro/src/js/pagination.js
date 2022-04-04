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