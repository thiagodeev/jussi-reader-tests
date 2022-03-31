const newsURLs = [
  "https://jussi-reader.netlify.app/.netlify/functions/news-on",
  "https://jussi-reader.netlify.app/.netlify/functions/news-two"
]

async function fetchAPI(urlList){
  let listOfAPIWithErrors = [];

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
      listOfAPIWithErrors.push(url);
    }
    finally {

      if (listOfAPIWithErrors.length > 0){
        console.log(`Ocorreram erros na(s) seguinte(s) API(s): ${listOfAPIWithErrors}`)
      }
    }
  };
}

fetchAPI(newsURLs);