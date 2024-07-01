document.querySelector('#back').addEventListener('click', navigateToReports)

let token = JSON.parse(localStorage.getItem('token'))
drawReports()
if (token.token != "ADMIN" && token.token != "BIBLIOTECARIO") {
  bloquear()
  
}else{
    drawReports()
}
drawReports()
function drawReports(){
    let listSorage = loadStorage();
    let list =[]
    
   
    for(let i = 0; i < listSorage.length;i++){
        for(let j = 0;  j <listSorage[i].reservas.length; j++){
            
            list.push(listSorage[i].reservas[j])

            

         }

    }
    console.log(list)
  
    tbody = document.querySelector('#reportList tbody');
    tbody.innerHTML = '';
 
 for(let i =0; i < list.length; i++){
   let row = tbody.insertRow(i);
    let isbnCell = row.insertCell(0),
    emailCell = row.insertCell(1),
    fechaCell = row.insertCell(2);
    
 
    
    isbnCell.innerHTML = list[i].isbn;
    emailCell.innerHTML = list[i].email;
    fechaCell.innerHTML = list[i].fecha;
   

     
     
 }
 }
 function navigateToReports() {
    const currentUrl = window.location.href;
    const newUrl = currentUrl.replace('reports.html', 'menu.html');
    window.location.href = newUrl;
}

function bloquear() {
    // Crear un elemento div que cubrirá toda la pantalla
    const overlay = document.createElement('div');
    
    // Establecer el estilo para que cubra toda la pantalla y bloquee la interacción
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'white';
    overlay.style.zIndex = '9999';  // Asegurarse de que esté por encima de todo el contenido
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
  
    // Crear el mensaje de "Permisos insuficientes"
    const message = document.createElement('div');
    message.textContent = 'Permisos insuficientes';
    message.style.color = 'red';
    message.style.fontSize = '24px';
    message.style.fontWeight = 'bold';
  
    // Añadir el mensaje al overlay
    overlay.appendChild(message);
  
    // Añadir el overlay al cuerpo del documento
    document.body.appendChild(overlay);
  }
  
  //volver
 document.querySelector('#back').addEventListener('click',navigateToMenu)
 
 // volver a menu
    function navigateToMenu() {
        const currentUrl = window.location.href;
        const newUrl = currentUrl.replace('deleteBooks.html', 'menu.html');
        window.location.href = newUrl;
    }