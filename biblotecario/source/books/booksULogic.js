document.querySelector('#addBook').addEventListener('click', saveBook);
const addBookForm = document.getElementById('addBookForm');
showBooks()
drawBooks()

function saveBook(){
  let  sIsbn = document.querySelector('#isbn').value,
   sNombre = document.querySelector('#title').value,
  sAutor = document.querySelector('#author').value,
  sTipo = document.querySelector('#topic').value,
  sCopias = document.querySelector('#copies').value;

addBookToSystem(sIsbn, sNombre, sAutor, sTipo, sCopias);

showBooks();


};

function showBooks(){
let books = loadStorage()
};

function drawBooks(){
   let list = getBookList()
   tbody = document.querySelector('#bookList tbody');
   tbody.innerHTML = '';

for(let i =0; i < list.length; i++){
  let row = tbody.insertRow(i);
   let isbnCell = row.insertCell(0),
   nombreCell = row.insertCell(1),
   autorCell = row.insertCell(2),
   temaCell = row.insertCell(3),
   cantidadCell = row.insertCell(4);
   selectCell = row.insertCell(5)

    isbnCell.innerHTML = list[i].isbn;
    nombreCell.innerHTML = list[i].nombre;
    autorCell.innerHTML = list[i].autor;
    temaCell.innerHTML = list[i].tema;
    cantidadCell.innerHTML = list[i].cantidad;
   

    tbody.appendChild(row);
    let inputSelect = document.createElement('input')
    inputSelect.type = 'radio'
    inputSelect.value = list[i].isbn
    selectCell.appendChild(inputSelect)
}
}