document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("inscricao-form");
    const salvarBtn = document.getElementById("salvar-dados");

    // Função para validar e-mail
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Função para salvar os dados no LocalStorage
    function salvarDados() {
        const formData = new FormData(form);
        let dados = {};
        formData.forEach((value, key) => {
            dados[key] = value;
        });
        localStorage.setItem("dadosInscricao", JSON.stringify(dados));
        alert("Informações salvas temporariamente.");
    }

    // Restaurar dados salvos
    function restaurarDados() {
        const dadosSalvos = localStorage.getItem("dadosInscricao");
        if (dadosSalvos) {
            const dados = JSON.parse(dadosSalvos);
            Object.keys(dados).forEach(key => {
                const input = document.querySelector([name="${key}"]);
                if (input) {
                    input.value = dados[key];
                }
            });
        }
    }

    // Evento de submissão do formulário
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const email = document.getElementById("email").value;
        if (!validarEmail(email)) {
            alert("Por favor, insira um e-mail válido.");
            return;
        }
        
        alert("Inscrição realizada com sucesso!");
         // Remover dados salvos após submissão
        form.submit();
    });

    // Evento para salvar dados
    salvarBtn.addEventListener("click", salvarDados);

    // Restaurar dados ao carregar a página
    restaurarDados();
});