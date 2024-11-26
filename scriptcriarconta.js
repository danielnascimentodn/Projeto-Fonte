document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const token = document.getElementById("token").value;

    if (password !== confirmPassword) {
        alert("As senhas não coincidem.");
        return;
    }

    if (!token) {
        alert("O token é obrigatório.");
        return;
    }

    alert("Conta criada com sucesso!");
});
