/*mostrar listado de libros*/

let booksList = []//listado
let userList = []


/*buscar libros en el storage*/
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


/* valida si hay copias disponibles y si el libro existe */
function validateSearch(reserveTitulo, reserveAutor, reserveTema){
    let encontro = false
    let noHayCopias = false
    let i = 0;
    while(noHayCopias == false && encontro == false && i < booksList.length ){
        if(booksList[i].nombre == reserveTitulo || booksList[i].autor == reserveAutor || booksList[i].tema == reserveTema){
            
            if(booksList[i].cantidad >= 1){
                encontro = true
            }else{
                noHayCopias = true
            }
        }else{
            i++
        }
    }

    
    
    if(encontro == false && noHayCopias == false){
        alert("la biblioteca no cuenta con ese libro")
    }else if(noHayCopias == true){
        alert("no hay copias de este libro para reservar")
    }
    
    return encontro
}


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

function loadStorageUsers(){
    let bookLocalStorage = localStorage.getItem('userList')
    if(bookLocalStorage == null){
      
        userList =[];
    } else{
      
        userList = JSON.parse(bookLocalStorage)
    }
    

    return booksList
};




function searchBookIsbn(isbn){ 

    let encontro = false
    let libroEncontrado
    let i = 0;
    while(encontro == false && i < booksList.length){

        if(booksList[i].isbn == isbn){
            libroEncontrado=booksList[i];
            encontro=true


        }else{
        i++

        }
    
        
    }
    
        return libroEncontrado

}

function validatedReserve(isbn){
    let validReservation = false
    let token = JSON.parse(localStorage.getItem('token'))
    let libro = searchBookIsbn(isbn)
    console.log(libro.disponible)

    if(libro.disponible == true){
        
        alert ("el libro seleccionado no se encuentra disponible")
        
    }else if(searchReservation(isbn, token)){
        alert ("Ya reservaste el libro seleccionado")
    }else{
        validReservation = true
    }
    return validReservation
};

function searchReservation(isbn, token){
    let reserveExist = false
    let user = searchUser(token.email)
    let i = 0;

    while(reserveExist == false && i < user.reservas.length){
        if(user.reservas[i].isbn == isbn){
            reserveExist = true
        }else{
            i++
        }
    }

    return reserveExist
}


/*se cambia la propiedad diposible del objeto almacenado en libro, 
se busca el mismo objeto en bookslist y se reemplaza por el objeto editado */
function reserve(isbn){
    let reserOk= false
    let libro =searchBookIsbn(isbn)

        let i = 0;
        while(reserOk == false && i < booksList.length){
            if(booksList[i].isbn === libro.isbn){
                libro.cantDisponible = libro.cantDisponible-1
                booksList[i] = libro;
                localStorage.setItem('booksList', JSON.stringify(booksList));   
                console.log("disponiibles" + booksList[i].cantDisponible); 
                reserOk = true            
            }else{
            i++
    
            }
        
    
        }




loadStorage()
}

function searchUser(email){
    let userList = JSON.parse(localStorage.getItem('userList'))
    let encontro = false
    let user
    let i = 0;
    while(encontro == false && i < userList.length){

        if(userList[i].email == email){
            user=userList[i];
            encontro=true


        }else{
        i++

        }
    
        
    }
    
        return user

}

function createReport(isbn, token){
       
       let libro =searchBookIsbn(isbn)
       let user = searchUser(token.email)
       let fecha =new Date()
       let reporte = {
        isbn: libro.isbn,
        email: token.email,
        fecha: fecha.toLocaleDateString()

       }
        user.reservas.push(reporte)
       libro.reservas.push(reporte)


       saveReportInUser(user)
       saveReportInBook(libro)
       
       
}

function saveReportInBook(book){
    let i = 0;
    let encontro = false
    while( encontro == false && i < booksList.length){
        if(booksList[i].isbn == book.isbn){
           
            booksList[i] = book;
            localStorage.setItem('booksList', JSON.stringify(booksList));
            
            encontro = true
        }else{
        i++
        }
    
    }
}

function saveReportInUser(user){
    let i = 0;
    let encontro = false
    while( encontro == false && i < userList.length){
        if(userList[i].email == user.email){
           
            userList[i] = user;
            localStorage.setItem('userList', JSON.stringify(userList));
            encontro = true
        }else{
        i++
        }
    
    }
}






