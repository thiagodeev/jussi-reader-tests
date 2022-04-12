async function getAPINews(){
  let newsOffline = JSON.parse(localStorage.getItem('newsFromAPI'));

  if(newsOffline === null){
    const newsFromAPI = await fetchAPI(newsURLs);
    return newsFromAPI;
  } else {
    const newsFromAPI = newsOffline;
    return newsFromAPI;
  }
};