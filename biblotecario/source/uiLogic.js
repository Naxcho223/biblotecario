document.querySelector('#miBoton').addEventListener('click',guardarUsuario)
document.querySelector('#reset').addEventListener('click', resetUsers)
showUsers()

function guardarUsuario() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const contraseña = document.getElementById('contraseña').value;

    addUser(nombre,apellido,email,telefono,contraseña)
    showUsers()
}

function showUsers(){
    let users = getUsers(),
    body = document.querySelector('#usuarios tbody')

    body.innerHTML = '';

    for (let index = 0; index < users.length; index++) {
        let row = body.insertRow(index),
        nombreCell = row.insertCell(0),
        apellidoCell = row.insertCell(1),
        emailCell = row.insertCell(2),
        telefonoCell = row.insertCell(3),
        contraseñaCell = row.insertCell(4)

        nombreCell.innerHTML = users[index].nombre;
        apellidoCell.innerHTML = users[index].apellido;
        emailCell.innerHTML = users[index].email;
        telefonoCell.innerHTML = users[index].telefono;
        contraseñaCell.innerHTML = users[index].contraseña;

        body.appendChild(row);
    }
}

function resetUsers(){
    localStorage.clear();
    showUsers()
}

