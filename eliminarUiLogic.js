// Función para mostrar la lista de libros almacenados
function mostrarLibros() {
    var librolista = document.getElementById('librolista');
    var libros = JSON.parse(localStorage.getItem('libros')) || [];

    // Limpiar la lista antes de volver a llenarla
    librolista.innerHTML = '';

    libros.forEach(function(libro, index) {
        var li = document.createElement('li');
        li.innerHTML = '<strong>Título:</strong> ' + libro.titulo + '<br><strong>Autor:</strong> ' + libro.autor + '<br><strong>Cantidad:</strong> ' + libro.cantidad;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Borrar';
        deleteButton.addEventListener('click', function() {
            deleteBook(index);
        });

        li.appendChild(deleteButton);
        librolista.appendChild(li);
    });
}

// Función para borrar un libro de la lista
function deleteBook(index) {
    var libros = JSON.parse(localStorage.getItem('libros')) || [];
    libros.splice(index, 1);
    localStorage.setItem('libros', JSON.stringify(libros));
    mostrarLibros(); // Actualizar la lista de libros mostrada
}

// Mostrar los libros almacenados al cargar la página por primera vez
mostrarLibros();