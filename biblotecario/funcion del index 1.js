function validarElformulario(){
    let email = document.getElementById('email').value.trim();
    let contraseña = document.getElementById('contraseña').value.trim();

    if(!isValidEmail(email)){

        alert('Por favor ingrese bien el correo electrónico.');
        return false
    }

    if (contraseña.lenght < 6) {
        alert('la contraseña debe tener al menos 6 caracteres.');
        return;
    }
    return false;{

    
    }
        function isValidEmail(email){
            let re = /\S+@\S+\.\S+/;
            return re.test(email);
        }

}     return true;