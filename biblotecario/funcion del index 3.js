function validarFormulario() {
    let dni = document.getElementById('dni').value.trim();
    let email = document.getElementById('email').value.trim();
    let contraseña = document.getElementById('contraseña').value;

    if (!(/^\d{8}$/.test(dni))) {
        alert('Por favor ingrese un DNI válido de 8 dígitos numéricos.');
        return false;
    }

   
    alert('Bibliotecario creado exitosamente.');
    return true;
}