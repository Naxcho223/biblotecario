document.querySelector('#buttonLogin').addEventListener('click',logingUser)
loadUsers()

function logingUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let validation = validateUser(email,password)
    if (validateUser(email,password)) {
        navigateToMenu()
    }
    
}

function navigateToMenu() {
    const currentUrl = window.location.href;
    const newUrl = currentUrl.replace('login.html', 'menu.html');
    window.location.href = newUrl;
}



