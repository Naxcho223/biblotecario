let userList = []

function addLibrarian(dni, email, contraseña){
    if (!validar(dni, email, contraseña)){
        
    }else{
        let hashPass = CryptoJS.SHA256(contraseña).toString(CryptoJS.enc.Hex);
        const librarian = {
            dni: dni,
            email: email,
            contraseña: hashPass,
            token: {token:'BIBLIOTECARIO',email: email}
        };
        userList.push(librarian) 
        SaveJson(userList)   
    }
}


function validar(dni, email, contraseña){
    let validacion = false;

    if (dni == '' || email == '' || contraseña == ''){
        alert('Por favor, complete todos los campos');
    }else if (validarExistencia(dni, email)){
        validacion = true;
    }    
    return validacion
}

function validarExistencia(dni, email){
    let validacion = true;
    let i = 0;

    while (validacion == true && i < userList.length){
        if (userList[i].dni == dni || userList[i].email.toLowerCase() == email.toLowerCase()){
            validacion = false;
            alert('El bibliotecario ya existe')
        }else{
            i++;
        }
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