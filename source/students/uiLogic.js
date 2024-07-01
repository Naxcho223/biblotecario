document.querySelector('#miBoton').addEventListener('click',guardarUsuario)
document.querySelector('#reset').addEventListener('click', resetUsers)
document.querySelector('#cerrarSesion').addEventListener('click',cerrarSesion)
showUsers()
document.querySelector("#back"). addEventListener('click', navigateToMenu )

if (localStorage.token != "ADMIN" && localStorage.token != "BIBLIOTECARIO") {
    bloquear()
    
}else{
    showUsers()
}


function guardarUsuario() {
    const credencial = document.getElementById('credencial').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const contraseña = document.getElementById('contraseña').value;
    

    addUser(credencial, nombre,apellido,email,telefono,contraseña)
    showUsers()
}

function showUsers(){
    let users = getUsers(),
    body = document.querySelector('#usuarios tbody')

    const isStudent = (student) => student.token == "ESTUDIANTE";
    const students = users.filter(isStudent);

    body.innerHTML = '';

    for (let index = 0; index < students.length; index++) {
        let row = body.insertRow(index),
        credencialCell = row.insertCell(0),
        nombreCell = row.insertCell(1),
        apellidoCell = row.insertCell(2),
        emailCell = row.insertCell(3),
        telefonoCell = row.insertCell(4)
        
        credencialCell.innerHTML = students[index].credencial;
        nombreCell.innerHTML = students[index].nombre;
        apellidoCell.innerHTML = students[index].apellido;
        emailCell.innerHTML = students[index].email;
        telefonoCell.innerHTML = students[index].telefono;
        

        body.appendChild(row);
    }
}

function resetUsers(){
    localStorage.clear()
    showUsers()
}

function cerrarSesion(){
    localStorage.removeItem('token');
    navigateToMenu()
}

function navigateToMenu() {
    const currentUrl = window.location.href;
    const newUrl = currentUrl.replace('studentForm.html', 'login.html');
    window.location.href = newUrl;
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
        const newUrl = currentUrl.replace('studentForm.html', 'menu.html');
        window.location.href = newUrl;
    }