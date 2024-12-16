document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginButton = document.querySelector('button[type="submit"]');
    const errorMessage = document.createElement('p');
    errorMessage.style.color = 'red';
    form.appendChild(errorMessage);

    loginButton.addEventListener('click', function (event) {
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        errorMessage.textContent = '';

        if (!email) {
            errorMessage.textContent = 'Por favor, preencha o campo de email.';
            return;
        }

        if (!emailRegex.test(email)) {
            errorMessage.textContent = 'Por favor, insira um email válido.';
            return;
        }

        if (!password) {
            errorMessage.textContent = 'Por favor, preencha o campo de senha.';
            return;
        }

        window.location.href = '../kanban/index.html';
    });
});
