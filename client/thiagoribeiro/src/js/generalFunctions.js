function getAllNewsOf (newsFromAPI) {
  let allNews = [];

  for (let newsLists of newsFromAPI){
    Object.entries(newsLists).forEach(([key, value]) => {
      allNews.push(...value);
    });
  };

  return allNews;
};

function newsTemplate(news){
  return  `
    <a href="${news.url}">
      <div>
        <img class="image" src="${news.image}" alt="">
      </div>
      <div>
        <h2 class="title">${news.title}</h2>
        <p class="date_published">${news.date_published}</p>
        <p class="excerpt">${news.exerpt}</p>
        <div class="categories">
        </div>
      </div>
    </a>
  `;
}

function writeNewsOnHTML(allNews){
  for (let news of allNews){
    console.log(news);
    
    document.body.insertAdjacentHTML("beforeend", newsTemplate(news));
  }
};