let userList = []

function validateUser(email, password) {
    let validation = false
    let users = loadUsers()

    let user = users.find(user => user.email == email)

    if (user) {
        let hashedInputPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
        if (user.contraseña === hashedInputPassword) {
            alert('Inicio de sesión exitoso');
            localStorage.setItem('token', user.token);
            validation = true
        } else {
            alert('Contraseña incorrecta');
        }
    } else {
        alert('Usuario no encontrado');
    }

    return validation
}

function loadUsers(){

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
