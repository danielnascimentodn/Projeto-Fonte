document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmaSenha = document.getElementById("confirmaSenha").value;
    const tokken = document.getElementById("tokken").value;

    if (senha !== confirmaSenha) {
        alert("As senhas não coincidem!");
        return;
    }

    alert(`Login realizado com sucesso!\nEmail: ${email}\nTokken: ${tokken}`);
});
