let booksList = [];

let  sIsbn = document.querySelector('#isbn').value,
sNombre = document.querySelector('#title').value,
sAutor = document.querySelector('#author').value,
sTipo = document.querySelector('#topic').value,
sCopias = document.querySelector('#copies').value;

// Función para agregar un libro al sistema
function addBookToSystem(isbn,title, author, topic, copies) {
    if (sIsbn == "" || sNombre == "" || sAutor == "" || sTipo == "" || sCopias == ""){
        console.log(" completar campos")

    }else{
        
    let newBook = {
        isbn: isbn,
        nombre: title,
        autor: author,
        tipo: topic,
        cantidad: copies
    };
        
    booksList.push(newBook);
    SaveJson(booksList);

    }
}

function SaveJson(booksList){
localStorage.setItem('booksList', JSON.stringify(booksList))
};


function loadStorage(){
    let bookLocalStorage = localStorage.getItem('booksList')
    if(bookLocalStorage == null){
        booksList =[];
    } else{
        booksList = JSON.parse(bookLocalStorage)
    }
    

    return booksList
};

function getBookList(){
    return booksList;
   
}