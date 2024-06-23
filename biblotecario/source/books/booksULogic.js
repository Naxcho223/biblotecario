document.querySelector('#addBook').addEventListener('click', saveBook);
const addBookForm = document.getElementById('addBookForm');
showBooks()


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