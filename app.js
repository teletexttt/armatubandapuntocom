document.getElementById('title').addEventListener('click', function() {
    var loginForm = document.getElementById('loginForm');
    loginForm.style.display = 'block'; // Mostrar el formulario de login
});

// Opcional: Cerrar el formulario cuando se haga clic fuera de él
document.addEventListener('click', function(event) {
    var loginForm = document.getElementById('loginForm');
    var title = document.getElementById('title');

    if (!loginForm.contains(event.target) && event.target !== title) {
        loginForm.style.display = 'none';
    }
});
