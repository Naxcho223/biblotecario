        function mostrarDatos() {
            var nombre = document.getElementById("nombre").value;
            var apellido = document.getElementById("apellido").value;
            var email = document.getElementById("email").value;
            var mensaje = "Nombre: " + nombre + "\nApellido: " + apellido + "\nEmail: " + email;
            alert(mensaje);
        }
        document.getElementById("formularioUsuario").addEventListener("submit", function(event) {
            event.preventDefault();
            mostrarDatos();
        });

function validarFormulario() {
    let nombre = document.getElementById('nombre').value.trim();
    let apellido = document.getElementById('apellido').value.trim();
    let email = document.getElementById('email').value.trim();
    let telefono = document.getElementById('telefono').value.trim();
    let contraseña = document.getElementById('contraseña').value;

    if (!(/^\d{10}$/.test(telefono))) {
        alert('Por favor ingrese un número de teléfono válido de 10 dígitos.');
        return false;
    }

    alert('Usuario creado exitosamente.');
    return true;
    
}


const usuarioGuardado = localStorage.getItem('usuario');


const usuario = JSON.parse(usuarioGuardado);


console.log(usuario);