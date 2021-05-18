let open = document.getElementById('open');
let close = document.getElementById('close');
let nav = document.getElementsByTagName('nav');
let menuList = document.querySelector('#burger__menu> div:last-child');
let li = document.querySelector('#burger__menu').getElementsByTagName('li')
for(let item in li){
    li[item].onclick = function(){
        closeMenu();
    };
}
ss
function openMenu(){
    nav[0].setAttribute('style', 'background: #1a1302b6;z-index: 1;');
    open.setAttribute('style', 'transform:translateX(-100%); opacity:0;')
    close.setAttribute('style','transform:translateX(0); opacity:1;')
    menuList.setAttribute('style','transform:translateX(0); ');
   
    
}
function closeMenu(){
    nav[0].setAttribute('style', 'background: none;z-index: 0;');
    open.setAttribute('style', 'transform:translateX(-0%); opacity:1;')
    close.setAttribute('style','transform:translateX(-100%); opacity:0;');
    menuList.setAttribute('style','transform:translateX(-100%); ');
}
