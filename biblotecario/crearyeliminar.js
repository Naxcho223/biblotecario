let libros = [];
function addBook(event) {
    event.preventDefault(); 

    let titulo = document.getElementById('titulo').value;
    let autor = document.getElementById('autor').value;
    let cantidad = parseInt(document.getElementById('cantidad').value);

    if (isNaN(cantidad) || cantidad <= 0) {
        alert('La cantidad debe ser un número mayor que cero.');
        return;
    }


    let libro = {
        titulo: titulo,
        autor: autor,
        cantidad: cantidad
    };


    libro.push(libros);

    document.getElementById('addBookForm').reset();


    displayBooks();
}


function displayBooks() {
    let tableBody = document.querySelector('#inventoryTable tbody');
    tableBody.innerHTML = '';

    books.forEach((libros, index) => {
        let row = tableBody.insertRow();
        row.innerHTML = `
            <td>${libro.titulo}</td>
            <td>${libro.autor}</td>
            <td>${libro.cantidad}</td>
            <td><button onclick="borrarlibro(${index})">Eliminar</button></td>
        `;
    });
}

function borrarlibro(index) {
    libros.splice(index, 1);
    displayBooks(); 
}

document.getElementById('addBookForm').addEventListener('submit', addBook);

displayBooks();