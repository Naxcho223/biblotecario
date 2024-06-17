document.querySelector('#miBoton').addEventListener('click',guardarUsuario)

showUsers()

function guardarUsuario() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const contraseña = document.getElementById('contraseña').value;

    addUser(nombre,apellido,email,telefono,contraseña)
}

function showUsers(){
    let users = getUsers()
    console.log(users)
   // body = document.querySelector('#usuarios tbody')
}


