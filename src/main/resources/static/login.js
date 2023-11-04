var users = [];

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var userExists = users.some(function(user) {
        return user.username === username;
    });

    if (userExists) {
        alert("Usuário já registrado. Por favor, faça login.");
    } else {
        users.push({ username: username, password: password });
        alert("Registro bem-sucedido! Faça login com suas credenciais.");
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
});

