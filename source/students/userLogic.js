let userList = []
function addUser(credencial, nombre,apellido,email,telefono,contraseña){
    if (!validar(credencial, nombre,apellido,email,telefono,contraseña)){
        alert('Intentelo nuevamente');
    }else{
        let hashPass = CryptoJS.SHA256(contraseña).toString(CryptoJS.enc.Hex);
        const usuario = {
            credencial: credencial,
            nombre: nombre,
            apellido: apellido,
            email: email,
            telefono: telefono,
            contraseña: hashPass,
            token: {token:'ESTUDIANTE',email: email},
            reservas: []
        };
        userList.push(usuario) 
        SaveJson(userList)   
    }
}
    function SaveJson(userList){
        localStorage.setItem('userList',JSON.stringify(userList))

    }
    function getUsers(){
        let localUserList = localStorage.getItem('userList')

        if (localUserList == null){
            userList = [
                {
                    nombre: "admin",
                    apellido: "admin",
                    email: "admin",
                    telefono: null,
                    contraseña: "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918",
                    token: {token:'ADMIN',email: email}
                }
            ]
            SaveJson(userList)
        }
        else {
            userList = JSON.parse(localUserList)
        
        }   return userList
    }


    function validar(credencial, nombre,apellido,email,telefono,contraseña){
        let validacion = false;
         const regex = /^[0-9]+$/;
    
        if (credencial == '' || nombre == '' || apellido == '' || email == '' || contraseña == ''){
            alert('Por favor, complete todos los campos');
        } else if (telefono != '' && !regex.test(telefono)){
            alert('Por favor, ingrese un número de teléfono válido');
        }else if(validarExistencia(credencial, email)){
            validacion = true;
        }
        return validacion
    }

    function validarExistencia(credencial, email){
        let validacion = true;
        let i = 0;
    
        while (validacion == true && i < userList.length){
            if (userList[i].credencial == credencial || userList[i].email.toLowerCase() == email.toLowerCase()){
                validacion = false;
                alert('El estudiante ya existe')
            }else{
                i++;
            }
        }
        return validacion
    }


 