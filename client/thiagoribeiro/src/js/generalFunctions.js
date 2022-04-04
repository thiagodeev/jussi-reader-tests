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

// function renderNewsOnHTML(organizedNews, numberOfNewsPerPage){
//   let paginationElement = document.getElementById("pagination");
//   let paginationItem;
//   let paginationNumberToShow;
  
//   organizedNews.forEach((news, index) => {
//     //write news on HTML
//     news.forEach(element => {
//       document.getElementById("newsList").insertAdjacentHTML("beforeend", newsTemplate(element));
//     });

//     //write paginaton
//     paginationNumberToShow = index + 1;
//     paginationItem = `<div>${paginationNumberToShow}</div>`;
//     paginationElement.insertAdjacentHTML("beforeend", paginationItem);
//   });
// };

function renderNewsOnHTML(organizedNews, currentPage){
  organizedNews[currentPage].forEach((news, index) => {
      document.getElementById("newsList").insertAdjacentHTML("beforeend", newsTemplate(news));
  });
};