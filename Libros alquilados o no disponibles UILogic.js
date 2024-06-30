
function alquilarLibro(id) {
    let libro = librosDisponibles.find(libro => libro.id === id);
    
      if (libro && libro.disponible) {
    let fechaDevolucion = new Date();
    fechaDevolucion.setDate(fechaDevolucion.getDate() + 7);

    libro.disponible = false;
    libro.fechaDev = fechaDevolucion.toLocaleDateString('es-ES');
    alert(`Has alquilado el libro "${libro.titulo}". Debes devolverlo antes del ${libro.fechaDev}.`);
    mostrarLibros();
  } else {
    alert('Este libro no está disponible para alquilar.');
  }
}
    
  document.addEventListener('DOMContentLoaded', mostrarLibros);