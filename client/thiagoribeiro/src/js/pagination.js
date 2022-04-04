  function writePagination(organizedNewsList){
    let newsListMainDiv = document.getElementById("newsList");
    let paginationElement = document.getElementById("pagination");
    let paginationItem, paginationNumber;

    //removes previous paginations. Faster to remove content than .innerHTML=""
    while (paginationElement.firstChild) {paginationElement.removeChild(paginationElement.lastChild);}

    for (let index=0; index < organizedNewsList.length; index++){
      paginationNumber = index + 1;
      //creates the pagination item
      paginationItem = document.createElement("div");
      paginationItem.setAttribute("data-pagination", index);
      paginationItem.innerText = paginationNumber;
      //adds the click event
      paginationItem.addEventListener("click", element => {
        if(!element.currentTarget.classList.contains("active")){
          //clears the newsList element
          while (newsListMainDiv.firstChild) {newsListMainDiv.removeChild(newsListMainDiv.lastChild);}
          //removes the class Active from all pagination items 
          for (let i=0; i < paginationElement.children.length; i++){
            paginationElement.children[i].removeAttribute('class');
          }

          renderNewsOnHTML(organizedNewsList, element.currentTarget.dataset.pagination);
          //adds the Active class to current clicked element
          element.currentTarget.classList.add("active");
        }
      });

      paginationElement.appendChild(paginationItem);
    }
  }