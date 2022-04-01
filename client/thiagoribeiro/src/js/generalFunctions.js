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

  console.log()

  return result.join("");
}

function newsTemplate(news){


  return  `
    <div onclick="location.href='${news.url}'">
      <div>
        <img class="image" src="${news.image}" alt="">
      </div>
      <div>
        <h2 class="title">${news.title}</h2>
        <p class="date_published">${news.date_published}</p>
        <p class="excerpt">${news.excerpt}</p>
        <div class="categories">
          ${returnAListOfCategories(news.categories, "name", "span")}
        </div>
      </div>
    </div>
  `;
}

function writeNewsOnHTML(allNews){
  for (let news of allNews){ 
    document.body.insertAdjacentHTML("beforeend", newsTemplate(news));
    console.log(news);
  }
};