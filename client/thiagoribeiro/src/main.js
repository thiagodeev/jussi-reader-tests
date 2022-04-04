const newsURLs = [
  "https://jussi-reader.netlify.app/.netlify/functions/news-oe",
  "https://jussi-reader.netlify.app/.netlify/functions/news-two"
]

async function fetchAPI(urlList){
  for await (const url of urlList) {
    try{
      const response = await fetch(url).then(response => {
        if(response.ok){
          console.log("tudo certo")
        }
        else {
          throw new Error("Ferrou moral")
        }

        console.log("Chegou até aqui?")
      });
    }
    catch {
      throw new Error("Ferrou moral no Catch")
    }  
  };
}

fetchAPI(newsURLs);
