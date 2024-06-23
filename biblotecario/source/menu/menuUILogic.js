document.querySelector('#crearEstudiantes').addEventListener('click',navigateToEstudiantesForm)
document.querySelector('#crearBibliotecarios').addEventListener('click',navigateToBibliotecarioForm)
document.querySelector('#gestionLibros').addEventListener('click',navigateToLibrosForm)

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