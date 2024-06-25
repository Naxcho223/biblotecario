let booksList = [];

function deleteBookToSystem(deleteIsbn){

    let borro = false;
    let i = 0
    while (borro == false && i < booksList.length) {
        if(booksList[i].isbn == deleteIsbn){
            booksList.splice(i,1)

            localStorage.setItem('booksList', JSON.stringify(booksList))
            borro = true
        }else{
            i++
        }

        
    }
}

function validateDeletion(deleteIsbn){
    encontro = false
    let i = 0;
    while(encontro == false && i < booksList.length){

        if(booksList[i].isbn == deleteIsbn){
            
            encontro=true;
        }else{
        i++

        }
    

    }

    return encontro
}
function loadStorage(){
    let bookLocalStorage = localStorage.getItem('booksList')
    if(bookLocalStorage == null){
      console.log(1)
        booksList =[];
    } else{
      console.log(2)
        booksList = JSON.parse(bookLocalStorage)
    }
    

    return booksList
};
