document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var loginUsername = document.getElementById("loginUsername").value;
    var loginPassword = document.getElementById("loginPassword").value;

    var user = users.find(function(user) {
        return user.username === loginUsername && user.password === loginPassword;
    });

    if (user) {
        alert("Login bem-sucedido! Bem-vindo, " + user.username + "!");
    } else {
        alert("Credenciais inválidas. Tente novamente.");
        document.getElementById("loginUsername").value = "";
        document.getElementById("loginPassword").value = "";
    }
});