let menuButton1=document.getElementById("menu1");
let menuButton2=document.getElementById("menu2");

let menuContent=document.getElementById("menuContainet");
function slide(){
    menuButton1.style.display='none';
    menuButton2.style.display='flex';
    menuContent.style.right='0%';
}
function deslide(){
    menuButton1.style.display='flex';
    menuButton2.style.display='none';
    menuContent.style.right='-50%';
}

menuButton1.addEventListener('click',slide);
menuButton2.addEventListener('click',deslide);
