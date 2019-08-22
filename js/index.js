const $showMenu = document.querySelector("#burger--button");
const $menu = document.querySelector("#menu");

$showMenu.addEventListener('click', e => $menu.classList.toggle('showMenu') );

// para validar si tenemos una clase en un elemento html lo hacemos de la siguiente manera
    // element.classList.contains('nombre-clase')

//de esta manera podemos agregar media querys en js
const $ipad = window.matchMedia('screen and (max-width: 767px)' );
//el la constante $ipad guardamos una funcion que se llama addListener
$ipad.addListener( e => $menu.classList.remove('showMenu') );
//de esta manera quitamos el menu


const $elementsLi = document.querySelector("#elementsLi").children;
const $tamLI = $elementsLi.length

    for (let i = 0; i < $tamLI; i++) {
            $elementsLi[i].addEventListener('click', e =>{
                    // e.stopPropagation() previene la propagacion de eventos
                    // e.preventDefault() previene la accion de un elemento por ejemplo un submit o un enlace de un ancle
                    $menu.classList.toggle('showMenu')         

            })
    }
