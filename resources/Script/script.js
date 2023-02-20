let menuButton1=document.getElementById("menu1");
let menuButton2=document.getElementById("menu2");
let arr1=document.getElementById("arrow1");
let arr2=document.getElementById("arrow2");
let arr3=document.getElementById("arrow3");
let arr4=document.getElementById("arrow4");
let psut=document.getElementById("psut");
let CodeCademy=document.getElementById("CodeCademy");

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

arr4.addEventListener('click',()=>{
    arr1.style.display='inline-block';
    arr2.style.display='none';
    arr3.style.display='inline-block';
    arr4.style.display='none';
    psut.style.display='none';
    CodeCademy.style.display='grid';
});

arr1.addEventListener('click',()=>{
    arr1.style.display='none';
    arr2.style.display='inline-block';
    arr3.style.display='none';
    arr4.style.display='inline-block';
    psut.style.display='grid';
    CodeCademy.style.display='none';
});