const nav__links = document.querySelector('.nav__links');
const nav__links_children = nav__links.children;
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){

    setTimeout(function () {
        nav__links.style.height = '55vh';
        for (i = 0; i < nav__links_children.length; i++) {
            nav__links_children[i].style.opacity = '1'
        }
        
    }, 100);

    nav__links.style.display = 'flex';

}
function close(){
    for (i = 0; i < nav__links_children.length; i++) {
        nav__links_children[i].style.opacity = '0'
    }
    nav__links.style.height = '0';
    setTimeout(function () {
        (nav__links.style.display = 'none')
    }, 450);
    // nav__links.style.top = '-100%';
}