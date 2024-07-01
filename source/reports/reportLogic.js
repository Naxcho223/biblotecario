
 /* cargar el storage */
function loadStorage(){
    let bookLocalStorage = localStorage.getItem('booksList')
    if(bookLocalStorage == null){
      
        booksList =[];
    } else{
      
        booksList = JSON.parse(bookLocalStorage)
    }
    

    return booksList
};