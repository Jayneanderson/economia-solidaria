//configuração do owl-carolsel
$('#owlOurTeam').owlCarousel({
    loop: true,/* informa que eu quero um loop, ou seja, repetir mesmo que acabe as imagens */
    dots: false,
    margin: 30, /* altera a margin entre as imagens */
    autoplay: true,
    autoWidth: true,
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