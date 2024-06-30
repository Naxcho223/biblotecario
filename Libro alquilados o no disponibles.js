/*mostrar listado de libros*/
let booksListStundents = []//listado


function loadStorage(){
    let bookLocalStorage = localStorage.getItem('booksListStudents')
    if(bookLocalStorage == null){
      
        booksList =[];
    } else{
      
        booksList = JSON.parse(bookLocalStorage)
    }
    

    return booksList
};


function searchBook(titulo, tema, autor){ 

    encontro = false
    let i = 0;
    while(encontro == false && i < booksList.length){

        if(booksList[i].nombre === titulo || booksList[i].autor === autor || booksList[i].tema === tema ){
            encontro=true;
        }else{
        i++

        }
    

    }
    return encontro

}