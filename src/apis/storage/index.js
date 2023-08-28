export async function uselocalStorage({key,initialValue}) {
  
  if(!localStorage.getItem(key)) await initial() 
  

  async function initial(){
    const value= await import("../../data.json")
    .then((data) =>data.boards)
    setStorage(value)
  }
  function setStorage(value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function getStorage() {
    return JSON.parse(localStorage.getItem(key));
  }

  return {
    setStorage,
    getStorage,
  };
}

