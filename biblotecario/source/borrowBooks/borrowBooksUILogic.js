//corregir no va reservedbook en addeventlistener
document.getElementById('searchBook').addEventListener('click',reserveBook )

drawBooks();
loadStorage()

function drawBooks(){
    let list = loadStorage();
  
    tbody = document.querySelector('#bookListStudents tbody');
    tbody.innerHTML = '';
 
 for(let i =0; i < list.length; i++){
   let row = tbody.insertRow(i);
    let nombreCell = row.insertCell(0),
    autorCell = row.insertCell(1),
    temaCell = row.insertCell(2),
    cantidadCell = row.insertCell(3);
    cantidadButton = row.insertCell(4);
 
    
     nombreCell.innerHTML = list[i].nombre;
     autorCell.innerHTML = list[i].autor;
     temaCell.innerHTML = list[i].tema;
     cantidadCell.innerHTML = list[i].cantidad;

     cantidadCell.innerHTML = `<button onclick="reserveBook(${list[i].isbn})"  > Reservar </button>`;
     
 }
 }
 

/* toma los valores de los input y los pasa como parametros ejecuta 
validacion y reserva, muestra listado actualizado*/
 function reserveBook(isbn){
    
    if(validatedReserve(isbn)){
        
reserve(isbn)
    }
    drawBooks()



}


/*let reserveTitulo = document.getElementById('title').value;
    let reserveAutor = document.getElementById('author').value;
    let reserveTema = document.getElementById('topic').value;*/