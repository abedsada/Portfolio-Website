//Declaring elements for DOM work!
let menuButton1=document.getElementById("menu1");
let menuButton2=document.getElementById("menu2");

let ExperienceHeaderButton=document.getElementById("ExperienceHeaderButton");
let EducationHeaderButton=document.getElementById("EducationHeaderButton");

let arr1=document.getElementById("arrow1");
let arr2=document.getElementById("arrow2");
let arr3=document.getElementById("arrow3");
let arr4=document.getElementById("arrow4");

let psut=document.getElementById("psut");
let CodeCademy=document.getElementById("CodeCademy");
let omco=document.getElementById("OMCO");
let rem=document.getElementById("REM");


let menuContent=document.getElementById("menuContainet");
let home=document.getElementById("Home");

let ExperienceButton= document.getElementById("SubTitleExperience");
let EducationButton= document.getElementById("SubTitleEducation");
let ExperienceEducation=0;

let EducationScreen=document.getElementById("Education");
let ExperienceScreen=document.getElementById("Experience");


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
function nextBackground(){
    let url = "url('./resources/Pictures/cover" + (Math.floor(Math.random() * 3) + 1) + ".jpg')";
    home.style.backgroundImage=url;
    setTimeout(nextBackground, 8000);
}
function rightArray(){
    arr1.style.display='inline-block';
    arr2.style.display='none';
    arr3.style.display='inline-block';
    arr4.style.display='none';

    if(!ExperienceEducation){
        psut.style.display='none'
        CodeCademy.style.display='grid';
    }
    else{
        psut.style.display='none'
        CodeCademy.style.display='none';
        omco.style.display='none'
        rem.style.display='grid';
    }
}
function leftArray(){
    arr1.style.display='none';
    arr2.style.display='inline-block';
    arr3.style.display='none';
    arr4.style.display='inline-block';

    if(!ExperienceEducation){
        psut.style.display='grid';
        CodeCademy.style.display='none';
    }
    else{
        psut.style.display='none'
        CodeCademy.style.display='none';
        omco.style.display='grid'
        rem.style.display='none';
    }
}
function ExperienceScreenOpener(){
    ExperienceButton.style.color='#3F3763';
    ExperienceButton.getElementsByTagName('img')[0].src="./resources/Pictures/work2.svg"
    EducationButton.style.color='#301f7b';    
    EducationButton.getElementsByTagName('img')[0].src="./resources/Pictures/edu1.svg"
    ExperienceEducation=1;

    EducationScreen.style.display='none';
    ExperienceScreen.style.display='flex';
    leftArray();
}
function EducationScreenOpener(){
    EducationButton.style.color='#3F3763';
    EducationButton.getElementsByTagName('img')[0].src="./resources/Pictures/edu2.svg"
    ExperienceButton.style.color='#301f7b';    
    ExperienceButton.getElementsByTagName('img')[0].src="./resources/Pictures/work1.svg"
    ExperienceEducation=0;

    ExperienceScreen.style.display='none';
    EducationScreen.style.display='flex';
    leftArray();
}


setTimeout(nextBackground, 8000);

menuButton1.addEventListener('click',slide);
menuButton2.addEventListener('click',deslide);



arr4.addEventListener('click',rightArray);

arr1.addEventListener('click',leftArray);

ExperienceButton.addEventListener('click',ExperienceScreenOpener);
ExperienceHeaderButton.addEventListener('click',ExperienceScreenOpener);


EducationButton.addEventListener('click',EducationScreenOpener);
EducationHeaderButton.addEventListener('click',EducationScreenOpener);
