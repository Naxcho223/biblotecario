let userList = []
function addUser(nombre,apellido,email,telefono,contraseña){
    if (!validar(nombre,apellido,email,telefono,contraseña)){
        alert('Intentelo nuevamente');
    }else{
        let hashPass = CryptoJS.SHA256(contraseña).toString(CryptoJS.enc.Hex);
        const usuario = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            telefono: telefono,
            contraseña: hashPass,
            token: 'ESTUDIANTE'
        };
        alert('Usuario guardado correctamente en el localStorage');      
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
                    "nombre": "admin",
                    "apellido": "admin",
                    "email": "admin",
                    "telefono": "",
                    "contraseña": "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918",
                    "token": "ADMIN"
                }
            ]
        }
        else {
            userList = JSON.parse(localUserList)
        
        }   return userList
    }


    function validar(nombre,apellido,email,telefono,contraseña){
        let validacion = false;
         const regex = /^[0-9]+$/;
    
        if (nombre == '' || apellido == '' || email == '' || contraseña == ''){
            alert('Por favor, complete todos los campos');
        } else if (telefono != '' && !regex.test(telefono)){
            alert('Por favor, ingrese un número de teléfono válido');
        }
        else {
            return true;
        }
    
        return validacion
    }
 