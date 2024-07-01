let booksList = [];


// Función para agregar un libro al sistema
function addBookToSystem(isbn,title, author, topic, copies) {
    
    if (validationsBooks(isbn,title, author, topic, copies)){
        let newBook = {
            isbn: isbn,
            nombre: title,
            autor: author,
            tema: topic,
            cantidad: copies,
            cantDisponible:copies,
            reservas: []
            
        };
            
        booksList.push(newBook);
        
        SaveJson(booksList);
    }else{

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

function validationsBooks(isbn, title, author,topic,copies){
    let isValid = false
    if(isbn == "" || title == ""|| author == "" || topic == "" || copies == ""){
        alert("rellanar campos")
    }else if(searchBook(isbn) == true){
        alert("ya existe el libro")
    }else if(copies < 0){
    }
    else{
        isValid = true
    }
    
    return isValid

}



function searchBook(disbn){ 

    encontro = false
    let i = 0;
    while(encontro == false && i < booksList.length){

        if(booksList[i].isbn === disbn){
            encontro=true;
        }else{
        i++

        }
    

    }
    return encontro

}