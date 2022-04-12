function favorites(allNewsInHTMLFormat){
  let favoriteItem = document.getElementById("favorites");
  let favoritesNewsList = [];
  let favoriteNews;

  favoriteItem.addEventListener("click", element => {
    favoritesNewsList = [];
    allNewsInHTMLFormat.forEach(news => {
      if(news.children[0].classList.contains("favorite")){
        favoritesNewsList.push(news);
      }
    });

    renderNews(favoritesNewsList);
    addOrderBy(favoritesNewsList);
    addSearch(favoritesNewsList);
  });
}