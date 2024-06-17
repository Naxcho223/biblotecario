let userList = []
function addUser(nombre,apellido,email,telefono,contraseña){
    let hashPass = CryptoJS.SHA256(contraseña).toString(CryptoJS.enc.Hex);
    const usuario = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        telefono: telefono,
        contraseña: hashPass
    };

    
    console.log(usuario);
    
    
    alert('Usuario guardado correctamente en el localStorage');
    
    userList.push(usuario)
    
    SaveJson(userList)
    
}
    function SaveJson(userList){
        localStorage.setItem('userList',JSON.stringify(userList))

    }
    function getUsers(){
        let localUserList = localStorage.getItem('userList')

        if (localUserList == null){
            userList = []
        }
        else {
            userList = JSON.parse(localUserList)
        
        }   return userList
    }
 