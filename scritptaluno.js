document.querySelector(".cadastrar").addEventListener("click", () => {
    alert("Cadastro realizado com sucesso!");
});

document.querySelector(".alterar").addEventListener("click", () => {
    alert("Cadastro alterado com sucesso!");
});

document.querySelector(".excluir").addEventListener("click", () => {
    if (confirm("Tem certeza que deseja excluir este cadastro?")) {
        alert("Cadastro excluído com sucesso!");
    }
});


