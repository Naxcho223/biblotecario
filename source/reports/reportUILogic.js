


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