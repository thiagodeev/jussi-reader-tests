function getAllNewsOf (newsFromAPI) {
  let allNews = [];

  for (let newsLists of newsFromAPI){
    Object.entries(newsLists).forEach(([key, value]) => {
      allNews.push(...value);
    });
  };

  return allNews;
};


function returnAListOfCategories(listOfCategories, objectKey, HTMLElement){
  let result = [];
  
  for (let categorie of listOfCategories){
    result.push(`<${HTMLElement}>${categorie[objectKey]}</${HTMLElement}>`);
  }

  return result.join("");
}

function newsTemplate(news){


  return  `
    <div class="newsList__news" onclick="location.href='${news.url}'">
      <div>
        <img class="newsList__news__image" src="${news.image}" alt="">
      </div>
      <div>
        <h2 class="newsList__news__title">${news.title}</h2>
        <p class="newsList__news__date_published">${news.date_published}</p>
        <p class="newsList__news__excerpt">${news.excerpt}</p>
        <div class="newsList__news__categories">
          ${returnAListOfCategories(news.categories, "name", "span")}
        </div>
      </div>
    </div>
  `;
}

function writeNewsOnHTML(allNews){
  for (let news of allNews){ 
    document.getElementById("newsList").insertAdjacentHTML("beforeend", newsTemplate(news));
  }
};