function orderByTitle(newsList){
  let ordenedList = Array.from(newsList).sort((a, b) => a.title < b.title ? -1 : 1);

  return ordenedList;
}

function orderByDate(newsList){
  let ordenedList = Array.from(newsList).sort((a, b) => a.date_published > b.date_published ? -1 : 1);

  return ordenedList;
}
