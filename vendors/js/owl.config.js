//configuração do owl-carolsel
$('#owl').owlCarousel({
    loop: true,/* informa que eu quero um loop, ou seja, repetir mesmo que acabe as imagens */
    margin: 7, /* altera a margin entre as imagens */
    nav: true, /* botões de navegação */
    autoplay: false,
    autoplayTimeout: 2000,
    dots: false,
    navText: ['<img id="arrow-prev" src="assets/img/arrow_back.svg" alt="Seta para a esqueda">',
    '<img id="arrow-next" src="assets/img/arrow_forward.svg" alt="Seta para a direita">'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1
        }
    }
})


//configuração do owl-carolsel
$('#owlOurTeam').owlCarousel({
    loop: true,/* informa que eu quero um loop, ou seja, repetir mesmo que acabe as imagens */
    dots: false,
    margin: 30,
    autoplay: false,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2,
        },
        1000: {
            items: 4
        }
    }
})

