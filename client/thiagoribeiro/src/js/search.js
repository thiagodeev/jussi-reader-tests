function search(allAPINews){
  let input = document.getElementById("searchbar");
  
  input.addEventListener("input", (element) => {
    //get value and remove white spaces
    let valueOfInput = element.target.value.replace(/\s+/g, '').toUpperCase();
    console.log(valueOfInput)

    allAPINews.forEach(element => {
      let newsTitle = element.getElementsByClassName("newsList__news__title")[0].innerText.replace(/\s+/g, '').toUpperCase();

      if (newsTitle.indexOf(valueOfInput) > -1){
        console.log(newsTitle)
      } 

    })
    
  });
}