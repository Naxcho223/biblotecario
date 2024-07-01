document.querySelector('#crearEstudiantes').addEventListener('click',navigateToEstudiantesForm)
document.querySelector('#crearBibliotecarios').addEventListener('click',navigateToBibliotecarioForm)
document.querySelector('#gestionLibros').addEventListener('click',navigateToLibrosForm)
document.querySelector('#bajaLibros').addEventListener('click',navigateToDeleteLibrosForm)
document.querySelector('#reportes').addEventListener('click', navigateToReports)
document.querySelector('#reservar').addEventListener('click', navigateToBorrow)


function navigateToBibliotecarioForm() {
    const currentUrl = window.location.href;
    const newUrl = currentUrl.replace('menu.html', 'bibliotecarioForm.html');
    window.location.href = newUrl;
}

function navigateToEstudiantesForm() {
    const currentUrl = window.location.href;
    const newUrl = currentUrl.replace('menu.html', 'studentForm.html');
    window.location.href = newUrl;
}
function navigateToLibrosForm() {
    const currentUrl = window.location.href;
    const newUrl = currentUrl.replace('menu.html', 'booksForm.html');
    window.location.href = newUrl;
}

function navigateToDeleteLibrosForm() {
    const currentUrl = window.location.href;
    const newUrl = currentUrl.replace('menu.html', 'deleteBooks.html');
    window.location.href = newUrl;
}

function navigateToReports() {
    const currentUrl = window.location.href;
    const newUrl = currentUrl.replace('menu.html', 'reports.html');
    window.location.href = newUrl;
}

function navigateToBorrow() {
    const currentUrl = window.location.href;
    const newUrl = currentUrl.replace('menu.html', 'borrowBooks.html');
    window.location.href = newUrl;
}

