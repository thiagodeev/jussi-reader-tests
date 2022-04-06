//********** title **********//
function orderByTitle(newsList){
  let ordenedList = Array.from(newsList).sort((a, b) => a.title < b.title ? -1 : 1);

  return ordenedList;
}

function renderHTMLListOrderedByTitle(elementToRender, renderfunction){
  let orderByTitleElement = document.getElementById("orderByTitle");
  orderByTitleElement.addEventListener("click", element => {
    document.getElementById("orderByDate").removeAttribute('class');
    
    if(!element.currentTarget.classList.contains("active")){
      renderfunction(elementToRender);
      
      element.currentTarget.classList.add("active");
    };
  });
};

//********** date **********//
function orderByDate(newsList){
  let ordenedList = Array.from(newsList).sort((a, b) => a.date_published > b.date_published ? -1 : 1);

  return ordenedList;
}

function renderHTMLListOrderedByDate(elementToRender, renderfunction){
  let orderByDateElement = document.getElementById("orderByDate");
  orderByDateElement.addEventListener("click", element => {
    document.getElementById("orderByTitle").removeAttribute('class');

    if(!element.currentTarget.classList.contains("active")){
      renderfunction(elementToRender);
      
      element.currentTarget.classList.add("active");
    };
  });
};

// //********** title and date **********//
// function renderOrderedBy(elementToRender)