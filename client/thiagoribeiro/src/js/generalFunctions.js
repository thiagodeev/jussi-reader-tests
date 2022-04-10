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

function returnAListOfCategories(listOfCategories){
  let divCategoriesList = document.createElement("div");
  divCategoriesList.classList.add("newsList__news__categories");

  let headerCategorieList = document.getElementById("categories-list");
  let headerCategorieList_2 = document.getElementById("categories-list-2");
  let categorieElement;

  for (let categorie of listOfCategories){
    categorieElement = document.createElement("span");
    categorieElement.innerText = categorie.name;

    categorieElement.addEventListener("click", element => {
      //pass through both clategories lists
      for (let headerCategorie of headerCategorieList.children){
        if(headerCategorie.innerText == categorie.name){
          headerCategorie.click();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
        for (let headerCategorie of headerCategorieList_2.children){
          if(headerCategorie.innerText == categorie.name){
            headerCategorie.click();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          };
        };
        }

      };
    });

    divCategoriesList.appendChild(categorieElement);
  }

  return divCategoriesList;
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

  let divCategoriesList = returnAListOfCategories(newsList.categories);

  element = document.createElement("div");
  element.classList.add("newsList__news");
  element.innerHTML = `      
    <img class="newsList__news__image" src="${newsList.image}" onerror="this.onerror=null; this.src='assets/image-placeholder.jpg'" alt="">
    <h2 class="newsList__news__title">${newsList.title}</h2>
    <p class="newsList__news__date_published">${date.toLocaleDateString("pt-BR", options)}</p>
    <p class="newsList__news__excerpt">${excerpt}</p>
  `;
  element.appendChild(divCategoriesList);

  element.addEventListener("click", element => {
    if(element.target.localName != "span"){
      window.location.href = newsList.url;
    }
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