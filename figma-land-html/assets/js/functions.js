// Função para exibir o vídeo ao clicar no banner
document.getElementById('banner').addEventListener('click', function() {
document.getElementById('banner').style.display = 'none'; // Esconde o banner
document.getElementById('video-play').style.display = 'block'; // Exibe o vídeo
});
// Função para fazer o navbar descer
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
        $('header').css({
            height: "81px",
        }).addClass("sticky")
        $('header .logo-center img').attr("src", "assets/img/logo-dark1.webp")
        $('header .right-social .facebook img').attr("src", "assets/icons/icon-facebook-blue.svg")
        $('header .right-social .twitter img').attr("src", "assets/icons/icon-twitter-blue.svg")
        $('header .right-social .linkedin img').attr("src", "assets/icons/icon-linkedin-blue.svg")
    } else {
        $('header').css({
            height: "187",
        }).removeClass("sticky")
        $('header .logo-center img').attr("src", "assets/img/logo-white1.webp")
        $('header .right-social .facebook img').attr("src", "assets/icons/icon-facebook-white.svg")
        $('header .right-social .twitter img').attr("src", "assets/icons/icon-twitter-white.svg")
        $('header .right-social .linkedin img').attr("src", "assets/icons/icon-linkedin-white.svg")
    }  
})