// Captura o formulário
const loginForm = document.getElementById('loginForm');

// Adiciona o evento de submissão ao formulário
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores do nome de usuário e senha
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Definir as credenciais corretas de vários usuários
    const users = [
        { username: "henrique", password: "123" },
        { username: "enzo" , password: "123"},
    ];

    // Verifica se o nome de usuário e a senha correspondem a algum usuário no array
    const validUser = users.find(user => user.username === username && user.password === password);

    if (validUser) {
        // Redireciona para outra página
        window.location.href = "./assets/page/principal.html";  // URL correta
    } else {
        // Exibe um alerta de erro se as credenciais estiverem incorretas
        alert("Usuário ou senha incorretos. Tente novamente.");
    }
});
