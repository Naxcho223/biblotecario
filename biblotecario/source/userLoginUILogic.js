document.querySelector('#buttonLogin').addEventListener('click',logingUser)
loadUsers()

function logingUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    validateUser(email,password)
}



