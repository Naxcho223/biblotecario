let booksList = [];

function deleteBookToSystem(deleteIsbn, deleteCopies){

    let borro = false;
    let i = 0
    while (borro == false && i < booksList.length) {
        if(booksList[i].isbn == deleteIsbn){
            if(booksList[i].cantidad == deleteCopies){
                booksList.splice(i,1)
                localStorage.setItem('booksList', JSON.stringify(booksList))
                borro = true
            }else if(booksList[i].cantidad > deleteCopies){
                booksList[i].cantidad = booksList[i].cantidad - deleteCopies
                localStorage.setItem('booksList', JSON.stringify(booksList))
                borro = true
            }
        }else{
            i++
        }

        
    }
}

function validateDeletion(deleteIsbn, deleteCopies){
    let encontro = false
    let noHayCopias = false
    let copiasNegativas = false
    let i = 0;
    while(noHayCopias == false && encontro == false && i < booksList.length && copiasNegativas == false){
        if(booksList[i].isbn == deleteIsbn){
            if(deleteCopies < 0){
                copiasNegativas = true
            }else if(booksList[i].cantidad >= deleteCopies){
                encontro = true
            }else{
                noHayCopias = true
            }
        }else{
        i++
        }
    }

    if(copiasNegativas == true){
    }else if(encontro == false && noHayCopias == false){
        alert("No se pudo borrar, no se encontro el libro")
    }else if(noHayCopias == true){
        alert("No se pudo borrar, no hay suficientes copias")
    }
    
    return encontro
}
function loadStorage(){
    let bookLocalStorage = localStorage.getItem('booksList')
    if(bookLocalStorage == null){
        booksList =[];
    } else{
        booksList = JSON.parse(bookLocalStorage)
    }
    

    return booksList
};
