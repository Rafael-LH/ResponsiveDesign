const $showMenu = document.querySelector("#burger--button");
const $menu = document.querySelector("#menu");

$showMenu.addEventListener('click', showMenu);
function showMenu(){
    $menu.classList.toggle('showMenu');
}