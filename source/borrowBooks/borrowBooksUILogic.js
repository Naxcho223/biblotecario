//corregir no va reservedbook en addeventlistener
document.getElementById('searchBook').addEventListener('click',reserveBook )
//volver
document.querySelector('#back').addEventListener('click',navigateToMenu)


drawBooks();

function drawBooks(){
    let listSorage = loadStorage();
    let userStorage = loadStorageUsers();
    let list =[]
    for(let i = 0; i < listSorage.length;i++){
        if(listSorage[i].cantDisponible > 0){
            list.push(listSorage[i])

        }


    }
  
    tbody = document.querySelector('#bookListStudents tbody');
    tbody.innerHTML = '';


 
 for(let i =0; i < list.length; i++){
   let row = tbody.insertRow(i);
    let nombreCell = row.insertCell(0),
    autorCell = row.insertCell(1),
    temaCell = row.insertCell(2),
    cantidadCell = row.insertCell(3);
    reserveButton = row.insertCell(4);
 
    
     nombreCell.innerHTML = list[i].nombre;
     autorCell.innerHTML = list[i].autor;
     temaCell.innerHTML = list[i].tema;
     cantidadCell.innerHTML = list[i].cantDisponible;
     reserveButton.innerHTML = `<button onclick="reserveBook(${list[i].isbn})"  > Reservar </button>`;
     
     
 }
 }
 

/* toma los valores de los input y los pasa como parametros ejecuta 
validacion y reserva, muestra listado actualizado*/
 function reserveBook(isbn){
    let token = JSON.parse(localStorage.getItem('token'))
    if(validatedReserve(isbn) && token.token == 'ESTUDIANTE'){        
    reserve(isbn)
    createReport(isbn, token)
    }else{alert('No sos estudiante')}
    drawBooks()



}





/*let reserveTitulo = document.getElementById('title').value;
    let reserveAutor = document.getElementById('author').value;
    let reserveTema = document.getElementById('topic').value;*/

    // volver a menu
    function navigateToMenu() {
        const currentUrl = window.location.href;
        const newUrl = currentUrl.replace('borrowBooks.html', 'menu.html');
        window.location.href = newUrl;
    }
