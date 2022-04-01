;(async function main (){

  const newsFromAPI = await fetchAPI(newsURLs);

  let allNews = getAllNewsOf(newsFromAPI);

  writeNewsOnHTML(allNews);

  // console.log(allNews);
})();