// Función para manejar el envío del formulario
document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío por defecto del formulario

    var tituloInput = document.getElementById('titulo');
    var autorInput = document.getElementById('autor');
    var CantidadInput = document.getElementById('cantidad');

    var titulo = tituloInput.value.trim();
    var autor = autorInput.value.trim();
    var cantidad = parseInt(CantidadInput.value.trim(), 10);

    if (titulo === '' || autor === '' || isNaN(cantidad) || cantidad <= 0) {
        alert('Por favor, llena todos los campos correctamente.');
        return;
    }

    var nuevolibro = {
        titulo: titulo,
        autor: autor,
        Cantidad: CantidadInput
    };

    var libros = JSON.parse(localStorage.getItem('libros')) || [];
    libros.push(nuevolibro);
    localStorage.setItem('libros', JSON.stringify(libros));

    displayBooks(); // Actualizar la lista de libros mostrada
    tituloInput.value = '';
    autorInput.value = '';
    CantidadInput.value = '';
});

// Función para mostrar la lista de libros almacenados
function displayBooks() {
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