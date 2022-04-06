isTheDataEventAddedForTheFirstTime = false;
isTheTitleEventAddedForTheFirstTime = false;

function dataEvent(element){
  document.getElementById("orderByTitle").removeAttribute('class');

  if(!element.currentTarget.classList.contains("active")){
    element.currentTarget.FUNCTIONrender(element.currentTarget.elementToRender);
    
    element.currentTarget.classList.add("active");
  };
}

function titleEvent(element){
  document.getElementById("orderByDate").removeAttribute('class');

  if(!element.currentTarget.classList.contains("active")){
    element.currentTarget.FUNCTIONrender(element.currentTarget.elementToRender);
    
    element.currentTarget.classList.add("active");
  };
}

// function addEvent(){console.log("hi")}

//********** title **********//
function orderByTitle(newsList){
  let ordenedList = Array.from(newsList).sort((a, b) => {
    let x = a.title.toUpperCase();
    let y = b.title.toUpperCase();

    return x < y ? -1 : 1;
  });

  return ordenedList;
};

function renderHTMLListOrderedByTitle(elementToRender, FUNCTIONrender){

  let orderByTitleElement = document.getElementById("orderByTitle");
  orderByTitleElement.removeAttribute('class');

  orderByTitleElement.elementToRender = elementToRender;
  orderByTitleElement.FUNCTIONrender = FUNCTIONrender;

  if(isTheDataEventAddedForTheFirstTime){
    orderByTitleElement.removeEventListener('click', titleEvent, true);
  }

  orderByTitleElement.addEventListener("click", titleEvent, true);

  isTheTitleEventAddedForTheFirstTime = true;
};

//********** date **********//
function orderByDate(newsList){
  let ordenedList = Array.from(newsList).sort((a, b) => {
    let x = a.date_published.toUpperCase();
    let y = b.date_published.toUpperCase();

    return x > y ? -1 : 1;
  });

  return ordenedList;
};

function renderHTMLListOrderedByDate(elementToRender, FUNCTIONrender){
  let orderByDateElement = document.getElementById("orderByDate");
  orderByDateElement.removeAttribute('class');

  orderByDateElement.elementToRender = elementToRender;
  orderByDateElement.FUNCTIONrender = FUNCTIONrender;

  if(isTheDataEventAddedForTheFirstTime){
    orderByDateElement.removeEventListener('click', dataEvent, true);
  }
  orderByDateElement.addEventListener("click", dataEvent, true);

  isTheDataEventAddedForTheFirstTime = true;
};

//********** title and date **********//
function addOrderBy(elementToRender, FUNCTIONformatNewsElement, FUNCTIONrender){
  let newsOrganizedByTitle = orderByTitle(elementToRender);
  let HTMLnewsOrganizedByTitle = FUNCTIONformatNewsElement(newsOrganizedByTitle);

  let newsOrganizedByDate = orderByDate(elementToRender);
  let HTMLnewsOrganizedByDate = FUNCTIONformatNewsElement(newsOrganizedByDate);

  renderHTMLListOrderedByTitle(HTMLnewsOrganizedByTitle, FUNCTIONrender);
  renderHTMLListOrderedByDate(HTMLnewsOrganizedByDate, FUNCTIONrender);
}