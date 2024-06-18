let userList = []

function addLibrarian(dni, email, contraseña){
    if (!validar(dni, email, contraseña)){
        alert('Intentelo nuevamente');
    }else{
        let hashPass = CryptoJS.SHA256(contraseña).toString(CryptoJS.enc.Hex);
        const librarian = {
            dni: dni,
            email: email,
            contraseña: hashPass,
            token: 'BIBLIOTECARIO'
        };
        alert('Usuario creado correctamente');      
        userList.push(librarian) 
        SaveJson(userList)   
    }
}


function validar(dni, email, contraseña){
    let validacion = false;

    if (dni == '' || email == '' || contraseña == ''){
        alert('Por favor, complete todos los campos');
    }
    else {
        return true;
    }

    return validacion
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