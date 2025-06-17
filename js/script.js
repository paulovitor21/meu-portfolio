document.addEventListener('DOMContentLoaded', () => {
const menuButton = document.querySelector('.menu-button');
    const nav = document.querySelector('nav');

    menuButton.addEventListener('click', () => {
      menuButton.classList.toggle('active');
      nav.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', () => {
        menuButton.classList.remove('active');
        nav.classList.remove('active');
      });
    });

    // Inicialização do AOS
    AOS.init({
      duration: 800,
      once: true
    });
})
    
  
