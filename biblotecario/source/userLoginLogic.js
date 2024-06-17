let userList = []

function validateUser(email, password) {
    let users = loadUsers()

    let user = users.find(user => user.email == email)

    if (user) {
        let hashedInputPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
        if (user.contraseña === hashedInputPassword) {
            alert('Inicio de sesión exitoso');
        } else {
            alert('Contraseña incorrecta');
        }
    } else {
        alert('Usuario no encontrado');
    }
}

function loadUsers(){

    let localUserList = localStorage.getItem('userList')

        if (localUserList == null){
            userList = []
        }
        else {
            userList = JSON.parse(localUserList)
        
        }   return userList

}