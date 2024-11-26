const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio do formulário padrão

    // Aqui você pode adicionar a lógica de validação e envio dos dados para o servidor
    // ...

    // Exemplo simples de alerta:
    alert('Formulário enviado com sucesso!');
});