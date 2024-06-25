document.querySelector('#buttonDeleteBook').addEventListener('click', deleteBook );

drawBooks()
if (localStorage.token != "ADMIN" && localStorage.token != "BIBLIOTECARIO") {
  bloquear()
  
}else{
  drawBooks()
}

function deleteBook(){
    let deleteIsbn = document.getElementById('deleteIsbn').value;
    if(validateDeletion(deleteIsbn)){
        deleteBookToSystem(deleteIsbn)
    }else{ alert("no se borro")}
    drawBooks()




}


function drawBooks(){
    let list = loadStorage()
    console.log(list)
    tbody = document.querySelector('#deleteBookList tbody');
    tbody.innerHTML = '';
 
 for(let i =0; i < list.length; i++){
   let row = tbody.insertRow(i);
    let isbnCell = row.insertCell(0),
    nombreCell = row.insertCell(1),
    autorCell = row.insertCell(2),
    temaCell = row.insertCell(3),
    cantidadCell = row.insertCell(4);
   
 
     isbnCell.innerHTML = list[i].isbn;
     nombreCell.innerHTML = list[i].nombre;
     autorCell.innerHTML = list[i].autor;
     temaCell.innerHTML = list[i].tema;
     cantidadCell.innerHTML = list[i].cantidad;
    
 
    
 }
 }
 
 
 
 function bloquear() {
   // Crear un elemento div que cubrirá toda la pantalla
   const overlay = document.createElement('div');
   
   // Establecer el estilo para que cubra toda la pantalla y bloquee la interacción
   overlay.style.position = 'fixed';
   overlay.style.top = '0';
   overlay.style.left = '0';
   overlay.style.width = '100%';
   overlay.style.height = '100%';
   overlay.style.backgroundColor = 'white';
   overlay.style.zIndex = '9999';  // Asegurarse de que esté por encima de todo el contenido
   overlay.style.display = 'flex';
   overlay.style.justifyContent = 'center';
   overlay.style.alignItems = 'center';
 
   // Crear el mensaje de "Permisos insuficientes"
   const message = document.createElement('div');
   message.textContent = 'Permisos insuficientes';
   message.style.color = 'red';
   message.style.fontSize = '24px';
   message.style.fontWeight = 'bold';
 
   // Añadir el mensaje al overlay
   overlay.appendChild(message);
 
   // Añadir el overlay al cuerpo del documento
   document.body.appendChild(overlay);
 }
 