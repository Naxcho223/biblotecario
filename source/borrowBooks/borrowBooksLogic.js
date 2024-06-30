/*mostrar listado de libros*/

let booksList = []//listado


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
    let libro = searchBookIsbn(isbn)
    console.log(libro.disponible)

    if(libro.disponible == true){
        
        return true
        
    }else{ alert ("el libro seleccionado no se encuentra disponible")
        };
   


};


/*se cambia la propiedad diposible del objeto almacenado en libro, 
se busca el mismo objeto en bookslist y se reemplaza por el objeto editado */
function reserve(isbn){
    let libro =searchBookIsbn(isbn)

  
    if(libro != false && libro.disponible == true){
        
        let i = 0;
        while(libro.disponible == true && i < booksList.length){

    
            if(booksList[i].isbn === libro.isbn){
                libro.disponible = false
                booksList[i] = libro;
                localStorage.setItem('booksList', JSON.stringify(booksList));
                
                
            }else{
            i++
    
            }
        
    
        }


    }

loadStorage()
}

function createReport(isbn, token){
       
       let libro =searchBookIsbn(isbn)
       let fecha =new Date()
       let reporte = {
        isbn: libro.isbn,
        mail: token[1],
        fecha: fecha.toLocaleDateString()

       }
       libro.reservas.push(reporte)
       
       let i = 0;
       let encontro = false
       while( encontro == false && i < booksList.length){

   
           if(booksList[i].isbn == libro.isbn){
              
               booksList[i] = libro;
               localStorage.setItem('booksList', JSON.stringify(booksList));
               
               encontro = true
           }else{
           i++
   
           }
       
   
       }

       
    //    
        
       


}
// buscar el libro ---
// agregar nuevo reporte al libro en la lista de registros
// el reporte tiene que tener el mail del usuario y fecha
// actualizar la lista (bookList y localStorage)





