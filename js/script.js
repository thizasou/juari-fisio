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
