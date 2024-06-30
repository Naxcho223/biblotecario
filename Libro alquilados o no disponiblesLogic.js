let librosDisponibles = [
    { id: 1, titulo: 'El principito', autor: 'Antoine de Saint-Exupéry', disponible: true },
    { id: 2, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', disponible: true },
    { id: 3, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', disponible: true },
  ];
  
  function mostrarLibros() {
    let librosContainer = document.getElementById('libros');
    librosContainer.innerHTML = ''; 
  
    librosDisponibles.forEach(libro => {
      let libroHTML = `
        <div class="book">
          <h3>${libro.titulo}</h3>
          <p>Autor: ${libro.autor}</p>
          <p>Disponible: ${libro.disponible ? 'Sí' : 'No'}</p>
          <button onclick="alquilarLibro(${libro.id})" ${libro.disponible ? '' : 'disabled'}>Alquilar</button>
        </div>
      `;
      librosContainer.innerHTML += libroHTML;
    });
  }