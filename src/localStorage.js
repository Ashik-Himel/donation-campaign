export const setStorageItems = id => {
  let getItems = localStorage.getItem('donated-id');
  if (getItems) {
    let getItemsParse = JSON.parse(getItems);
    if (getItemsParse.includes(id)) {
      return false;
    }
    else {
      let setItems =  JSON.stringify([...getItemsParse, id]);
      localStorage.setItem('donated-id', setItems);
      return true;
    }
  }
  else {
    localStorage.setItem('donated-id', `["${id}"]`);
    return true;
  }
}