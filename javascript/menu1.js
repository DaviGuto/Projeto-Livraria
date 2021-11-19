'use strict'

const menu_size = '280px';

let open = true;

document.querySelector('#botao-menu').addEventListener('click', e => {
   open = !open;
   toggleMenu();
})

document.querySelector('#botao-fechar').addEventListener('click', e => {
    open = false;
    toggleMenu();
})

function toggleMenu() {
    if(open) {
        document.querySelector('#menu-lateral').style.marginLeft = 0;
        return;
    }
    document.querySelector('#menu-lateral').style.marginLeft = `-${menu_size}`;
}

function voltar_ao_topo() {$("html, body").animate({
    scrollTop: "0" }, 2000);}

