function validarFormulario() {
    let nombre = document.getElementById('nombre').value.trim();
    let apellido = document.getElementById('apellido').value.trim();
    let email = document.getElementById('email').value.trim();
    let telefono = document.getElementById('telefono').value.trim();
    let contraseña = document.getElementById('contraseña').value;

    // Validación básica del número de teléfono (opcional, dependiendo de requisitos específicos)
    if (!(/^\d{10}$/.test(telefono))) {
        alert('Por favor ingrese un número de teléfono válido de 10 dígitos.');
        return false;
    }

    // Puedes agregar más validaciones según tus requisitos, como la validación del formato de correo electrónico, longitud de la contraseña, etc.

    // Si llegamos hasta aquí, el formulario es válido
    alert('Usuario creado exitosamente.');
    return true;
}