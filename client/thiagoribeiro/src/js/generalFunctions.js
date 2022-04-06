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

  element = document.createElement("div");
  element.classList.add("newsList__news");
  element.innerHTML = `      
      <div>
        <img class="newsList__news__image" src="${newsList.image}" alt="">
      </div>
      <div>
        <h2 class="newsList__news__title">${newsList.title}</h2>
        <p class="newsList__news__date_published">${date.toLocaleDateString("pt-BR")}</p>
        <p class="newsList__news__excerpt">${newsList.excerpt}</p>
        <div class="newsList__news__categories">${returnAListOfCategories(newsList.categories, "name", "span")}</div>
      </div>
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