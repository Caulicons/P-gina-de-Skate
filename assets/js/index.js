const btnMenu = document.querySelector('.cabecalho__menu')

btnMenu.addEventListener('click', () => {

    document.querySelector('nav')
    .classList.toggle('menu-lateral--ativo')

    document.querySelector('.cabecalho__logo')
    .classList.toggle('cabecalho__logo--off')
})

