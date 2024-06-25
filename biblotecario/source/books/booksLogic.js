let booksList = [];


// Función para agregar un libro al sistema
function addBookToSystem(isbn,title, author, topic, copies) {
    
    if (isbn == "" || title == "" || author == "" || topic == "" || copies == ""){
       

    }else{
        
    let newBook = {
        isbn: isbn,
        nombre: title,
        autor: author,
        tema: topic,
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

