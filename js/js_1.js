
//MENU
if (screen.width < 800) {
    function menu_mobile() {
        document.querySelector('.ul').style.right = '0'
        document.querySelector('.ul').style.background = '#5271FF'
        document.querySelector('#icon-burgue').style.display = 'none'

        document.querySelector('#icon-x').style.display = 'block'

    }

    function menu_mobile_stop() {
        document.querySelector('.ul').style.right = '100%'
        document.querySelector('#icon-burgue').style.display = 'block'
        document.querySelector('#icon-x').style.display = 'none'

    }
}
//funçao esconder menu apos clique n mobile
function fecha() {
    if (screen.width < 800) {
        document.querySelector('.ul').style.right = '100%'
        document.querySelector('#icon-burgue').style.display = 'block'
    }
}


if (screen.width > 800) {
    //funçao para adicionar o uma listra branca no menu apos o scroll ser movido
    $(function () {
        //caches a jQuery object containing the header element
        var header = document.querySelector(".ul")
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 45) {
                header.style.background = "#5271FF"
                header.style.boxShadow = "2px 2px 2px rgba(250, 250, 250, 0.26)"
            } else {
                header.style.background = "rgba(114, 83, 185, 0)"
                header.style.boxShadow = "none"
            }
        });
    });
}