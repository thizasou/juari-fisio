function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let icon = document.querySelector('.icon');

    // Verifica se o menu está aberto
    if (menuMobile.classList.contains('open')) {
        // Se estiver aberto, remove a classe 'open' e troca o ícone para o hamburguer
        menuMobile.classList.remove('open');
        icon.src = "imagens/abrir.png";  // Ícone de hambúrguer
    } else {
        // Se estiver fechado, adiciona a classe 'open' e troca o ícone para o "X"
        menuMobile.classList.add('open');
        icon.src = "imagens/fechar.png";  // Ícone de "X"
    }
}

document.querySelectorAll('.nav-link, .contato-button').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        // Obtém o ID da seção alvo do link (removendo o "#")
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);

        if (targetSection) {
            // Calcula a posição da seção alvo, considerando a altura do menu
            const menuHeight = document.querySelector('.nav-bar').offsetHeight;
            const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - menuHeight;

            // Rola suavemente até a seção alvo
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Fecha o menu mobile se ele estiver aberto
            const menuMobile = document.querySelector('.mobile-menu');
            if (menuMobile.classList.contains('open')) {
                menuMobile.classList.remove('open');  // Fecha o menu
                document.querySelector('.icon').src = "imagens/abrir.png"; // Muda o ícone do menu
            }
        }
    });
});


document.querySelectorAll('.nav-link, .contato-buttom a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1); // Remove o "#" do href
        const targetSection = document.getElementById(targetID);

        if (targetSection) {
            // Obter a altura do menu
            const menuHeight = document.querySelector('.nav-bar').offsetHeight;

            // Calcular a posição de rolagem subtraindo a altura do menu
            const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - menuHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});