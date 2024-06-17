let userList = []
function addUser(nombre,apellido,email,telefono,contraseña){
    const usuario = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        telefono: telefono,
        contraseña: contraseña
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
 