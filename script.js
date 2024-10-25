document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');

    loginBtn.addEventListener('click', function() {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        loginBtn.classList.add('active');
        registerBtn.classList.remove('active');
    });

    registerBtn.addEventListener('click', function() {
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
        registerBtn.classList.add('active');
        loginBtn.classList.remove('active');
    });
});

