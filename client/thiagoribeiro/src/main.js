const newsURLs = [
  "https://jussi-reader.netlify.app/.netlify/functions/news-one",
  "https://jussi-reader.netlify.app/.netlify/functions/news-two",
];

async function fetchAPI (urlList){
  const newsList = [];
  let listOfAPIWithErrors = [];

  for await (const url of urlList) {
    try{
      const response = await fetch(url);
      const data = await response.json();
      newsList.push(data);
    }
    catch {
      listOfAPIWithErrors.push(url);
    }
  };

  if (listOfAPIWithErrors.length > 0){
    console.log(`Ocorreram erros de conexão na(s) seguinte(s) API(s): ${listOfAPIWithErrors}`)
  }

  return newsList;
};



;(async function main (){
  numberOfNewsPerPage = 6;

  const newsFromAPI = await fetchAPI(newsURLs);
  const allAPINews = getAllNewsOf(newsFromAPI);
  const allNewsInHTMLFormat = createsHTMLNewsFrom(allAPINews);

  renderNews = function (arrayToRender){
    const organizedNews = divideTheArray(arrayToRender, numberOfNewsPerPage);
    renderNewsOnHTML(organizedNews);
    writePagination(organizedNews);
  };
  renderNews(allNewsInHTMLFormat);
  addOrderBy(allNewsInHTMLFormat);
  addSearch(allNewsInHTMLFormat)

  //********** categories **********//
  renderCategorieList(createsCategoriesObject(allNewsInHTMLFormat));

  // let teste = createsHTMLNewsFrom(allAPINews);
  // console.log(teste)
  // search(teste);
  // //add click to title
  titleLink(allNewsInHTMLFormat);
})();



function titleLink(organizedNews){
  document.getElementById("title").onclick= function(){
    renderNews(organizedNews);
    addOrderBy(organizedNews);
    addSearch(organizedNews);
    
    //remove Active class from categories
    let categoriesListElement = document.getElementById("categories-list");

    for (let i=0; i < categoriesListElement.children.length; i++){
      categoriesListElement.children[i].classList.remove('active');
    }
  }
}

function getAllNewsOf (newsFromAPI) {
  let allNews = [];

  for (let newsLists of newsFromAPI){
    Object.entries(newsLists).forEach(([key, value]) => {
      allNews.push(...value);
    });
  };

  return allNews;
};

function divideTheArray(arrayToDivide){
  let tempArray = Array.from(arrayToDivide);
  let organizedNewsList = [];
  
  while (tempArray.length) {
    organizedNewsList.push(tempArray.splice(0, numberOfNewsPerPage));
  }

  return organizedNewsList;
};

function returnAListOfCategories(listOfCategories, objectKey, HTMLElement){
  let result = [];
  
  for (let categorie of listOfCategories){
    result.push(`<${HTMLElement}>${categorie[objectKey]}</${HTMLElement}>`);
  }

  return result.join("");
};

function newsTemplate(newsList){
  let element;

  let date = new Date(newsList.date_published);
  let options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  let excerpt = (function truncateString(str, num) {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + '...'
  })(newsList.excerpt, 75);

  element = document.createElement("div");
  element.classList.add("newsList__news");
  element.innerHTML = `      
    <img class="newsList__news__image" src="${newsList.image}" onerror="this.onerror=null; this.src='assets/image-placeholder.jpg'" alt="">
    <h2 class="newsList__news__title">${newsList.title}</h2>
    <p class="newsList__news__date_published">${date.toLocaleDateString("pt-BR", options)}</p>
    <p class="newsList__news__excerpt">${excerpt}</p>
    <div class="newsList__news__categories">${returnAListOfCategories(newsList.categories, "name", "span")}</div>
  `;

  element.addEventListener("click", element => {
    window.location.href = newsList.url;
  });

  return element;
};

function renderNewsOnHTML(organizedNews, currentPage = 0){
  deleteChildElements(document.getElementById("newsList"));

  organizedNews[currentPage].forEach(news => {
    document.getElementById("newsList").appendChild(news);
  });
};

function createsHTMLNewsFrom(listToConvert){
  let listWithHTMLElements = [];

  listToConvert.forEach(element => {
    listWithHTMLElements.push(newsTemplate(element));
  });

  return listWithHTMLElements;
};

function deleteChildElements(element){
  //Faster to remove content than .innerHTML=""
  while (element.firstChild) {element.removeChild(element.lastChild);};
};
  function writePagination(organizedNews){
    let paginationElement = document.getElementById("pagination");
    let paginationItem, paginationNumber;

    //removes previous paginations
    deleteChildElements(paginationElement);

    for (let index=0; index < organizedNews.length; index++){
      paginationNumber = index + 1;

      //creates the pagination item
      paginationItem = document.createElement("div");
      paginationItem.setAttribute("data-pagination", index);
      paginationItem.innerText = paginationNumber;

      //adds the click event
      paginationItem.addEventListener("click", element => {
        if(!element.currentTarget.classList.contains("active")){
          window.scrollTo({ top: 0, behavior: 'smooth' });
          //removes the class Active from all pagination items 
          for (let i=0; i < paginationElement.children.length; i++){
            paginationElement.children[i].removeAttribute('class');
          }

          //write the page on HTML
          renderNewsOnHTML(organizedNews, element.currentTarget.dataset.pagination);

          //adds the Active class to current clicked element
          element.currentTarget.classList.add("active");
        }
      });
      paginationElement.appendChild(paginationItem);
    }
    paginationElement.firstChild.classList.add("active")
  }
function createsCategoriesObject(listOfNews){
  let categoriesObject = {
    "Sem Categoria": []
  };

  listOfNews.forEach(element => {
    let categoriesList = element.getElementsByClassName("newsList__news__categories")[0];

    if(categoriesList.childElementCount == 0){
      categoriesObject["Sem Categoria"].push(element);

    } else {
      Array.from(categoriesList.children).forEach(categorieElement => {
        let categorie = categorieElement.innerText;

        if(!categoriesObject.hasOwnProperty(categorie)){
          categoriesObject[categorie] = [];
          categoriesObject[categorie].push(element);
        } else {
          categoriesObject[categorie].push(element);
        }
      });
    }
  })
  // console.log(categoriesObject)
  return categoriesObject;
}

function renderCategorieList(categoriesObject){
  let categoriesListElement = document.getElementById("categories-list");
  let HTMLCategoriesList = {};
  
  Object.entries(categoriesObject).forEach(([key, value]) => {
    //create <a> tag
    let categorieItemAnchor = document.createElement("a");
    categorieItemAnchor.setAttribute("href", "#");
    categorieItemAnchor.innerText = key;
    //create <li> tag and append the <a>
    let categorieItem = document.createElement("li");
    categorieItem.classList.add("flex-item");
    categorieItem.appendChild(categorieItemAnchor);


    categorieItem.addEventListener("click", element => {
      if(!element.currentTarget.classList.contains("active")){
        // console.log(categorieElements)

        //removes the class Active from all categories items 
        for (let i=0; i < categoriesListElement.children.length; i++){
          categoriesListElement.children[i].classList.remove('active');
        }
        
        //write the page on HTML
        renderNews(value);
        addOrderBy(value);
        addSearch(value)

        //adds the Active class to current clicked element
        element.currentTarget.classList.add("active");
      }
    });

    categoriesListElement.appendChild(categorieItem);
  });
};
isTheDataEventAddedForTheFirstTime = false;
isTheTitleEventAddedForTheFirstTime = false;

function dataEvent(element){
  document.getElementById("orderByTitle").removeAttribute('class');

  if(!element.currentTarget.classList.contains("active")){
    renderNews(element.currentTarget.elementToRender);
    
    element.currentTarget.classList.add("active");
  };
}

function titleEvent(element){
  document.getElementById("orderByDate").removeAttribute('class');

  if(!element.currentTarget.classList.contains("active")){
    renderNews(element.currentTarget.elementToRender);
    
    element.currentTarget.classList.add("active");
  };
}

//********** title **********//
function orderByTitle(newsList){
  let ordenedList = Array.from(newsList).sort((a, b) => {
    let x = a.getElementsByClassName("newsList__news__title")[0].innerText.toUpperCase();
    let y = b.getElementsByClassName("newsList__news__title")[0].innerText.toUpperCase();

    return x < y ? -1 : 1;
  });

  return ordenedList;
};

function renderHTMLListOrderedByTitle(elementToRender){
  let orderByTitleElement = document.getElementById("orderByTitle");
  orderByTitleElement.removeAttribute('class');

  orderByTitleElement.elementToRender = elementToRender;

  if(isTheTitleEventAddedForTheFirstTime){
    orderByTitleElement.removeEventListener('click', titleEvent, true);
  }

  orderByTitleElement.addEventListener("click", titleEvent, true);

  isTheTitleEventAddedForTheFirstTime = true;
};

//********** date **********//
function orderByDate(newsList){
  let ordenedList = Array.from(newsList).sort((a, b) => {
    let x = a.getElementsByClassName("newsList__news__date_published")[0].innerText
    let y = b.getElementsByClassName("newsList__news__date_published")[0].innerText

    return x > y ? -1 : 1;
  });

  return ordenedList;
};

function renderHTMLListOrderedByDate(elementToRender){
  let orderByDateElement = document.getElementById("orderByDate");
  orderByDateElement.removeAttribute('class');

  orderByDateElement.elementToRender = elementToRender;

  if(isTheDataEventAddedForTheFirstTime){
    orderByDateElement.removeEventListener('click', dataEvent, true);
  }
  orderByDateElement.addEventListener("click", dataEvent, true);

  isTheDataEventAddedForTheFirstTime = true;
};

//********** title and date **********//
function addOrderBy(elementToRender){
  let HTMLnewsOrganizedByTitle = orderByTitle(elementToRender);
  let HTMLnewsOrganizedByDate = orderByDate(elementToRender);

  renderHTMLListOrderedByTitle(HTMLnewsOrganizedByTitle);
  renderHTMLListOrderedByDate(HTMLnewsOrganizedByDate);
}
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