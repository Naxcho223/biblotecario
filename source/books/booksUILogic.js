document.querySelector('#addBook').addEventListener('click', saveBook);
const addBookForm = document.getElementById('addBookForm');


drawBooks()
let token = JSON.parse(localStorage.getItem('token'))
if (token.token != "ADMIN" && token.token != "BIBLIOTECARIO") {
  bloquear()
  
}else{
  drawBooks()
}






function saveBook(){
  let  sIsbn = document.querySelector('#isbn').value,
   sNombre = document.querySelector('#title').value,
  sAutor = document.querySelector('#author').value,
  sTipo = document.querySelector('#topic').value,
  sCopias = document.querySelector('#copies').value;

addBookToSystem(sIsbn, sNombre, sAutor, sTipo, sCopias);

drawBooks()


};


function drawBooks(){
   let list = loadStorage()
   
   tbody = document.querySelector('#bookList tbody');
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
//volver
document.querySelector('#back').addEventListener('click',navigateToMenu)

 // volver a menu
    function navigateToMenu() {
        const currentUrl = window.location.href;
        const newUrl = currentUrl.replace('booksForm.html', 'menu.html');
        window.location.href = newUrl;
    }