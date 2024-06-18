document.querySelector('#crearBibliotecario').addEventListener('click',guardarBibliotecario)
document.querySelector('#cerrarSesion').addEventListener('click',cerrarSesion)


if (localStorage.token != "ADMIN") {
    bloquear()
    
}else{
    showUsers()
}

function guardarBibliotecario() {
    const dni = document.getElementById('dni').value;
    const email = document.getElementById('email').value;
    const contraseña = document.getElementById('contraseña').value;

    addLibrarian(dni, email, contraseña)
    showUsers()
    
}


function showUsers(){
    let users = getUsers(),
    body = document.querySelector('#bibliotecarios tbody')

    const isLibrarian = (student) => student.token == "BIBLIOTECARIO";
    const librarian = users.filter(isLibrarian);

    body.innerHTML = '';

    for (let index = 0; index < librarian.length; index++) {
        console.log(librarian[index]);
        let row = body.insertRow(index),
        dniCell = row.insertCell(0),
        emailCell = row.insertCell(1)

        dniCell.innerHTML = librarian[index].dni;
        emailCell.innerHTML = librarian[index].email;

        body.appendChild(row);
    }
}

function cerrarSesion(){
    localStorage.removeItem('token');
    location.reload()
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