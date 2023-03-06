let menuButton1=document.getElementById("menu1");
let menuButton2=document.getElementById("menu2");


let ExperienceHeaderButton=document.getElementById("ExperienceHeaderButton");
let EducationHeaderButton=document.getElementById("EducationHeaderButton");

let ExperienceHeaderButton2=document.getElementById("ExperienceHeaderButton2");
let EducationHeaderButton2=document.getElementById("EducationHeaderButton2");


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
        psut.style.display='none';
        CodeCademy.style.display='grid';
    }
    else{
        psut.style.display='none';
        CodeCademy.style.display='none';
        omco.style.display='none';
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
        psut.style.display='none';
        CodeCademy.style.display='none';
        omco.style.display='grid';
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
ExperienceHeaderButton2.addEventListener('click',ExperienceScreenOpener);


EducationButton.addEventListener('click',EducationScreenOpener);
EducationHeaderButton.addEventListener('click',EducationScreenOpener);
EducationHeaderButton2.addEventListener('click',EducationScreenOpener);


let jsSkill=document.getElementById("JS");
let cssSkill=document.getElementById("CSS");
let htmlSkill=document.getElementById("html");
let gitSkill=document.getElementById("GitVCS");
let reactSkill=document.getElementById("React");
let reduxSkill=document.getElementById("Redux");

jsSkill.addEventListener("mouseover", () => {
    jsSkill.style.gridTemplate="60% 10%/1fr";
    jsSkill.getElementsByTagName("ul")[0].style.bottom='-100%';

});
jsSkill.addEventListener("mouseout", () => {
    jsSkill.style.gridTemplate="2fr 1fr 3fr/1fr";
    jsSkill.getElementsByTagName("ul")[0].style.bottom='0%';

});


cssSkill.addEventListener("mouseover", () => {
    cssSkill.style.gridTemplate="60% 10%/1fr";
    cssSkill.getElementsByTagName("ul")[0].style.bottom='-100%';

});
cssSkill.addEventListener("mouseout", () => {
    cssSkill.style.gridTemplate="2fr 1fr 3fr/1fr";
    cssSkill.getElementsByTagName("ul")[0].style.bottom='0%';

});


htmlSkill.addEventListener("mouseover", () => {
    htmlSkill.style.gridTemplate="60% 10%/1fr";
    htmlSkill.getElementsByTagName("ul")[0].style.bottom='-100%';

});
htmlSkill.addEventListener("mouseout", () => {
    htmlSkill.style.gridTemplate="2fr 1fr 3fr/1fr";
    htmlSkill.getElementsByTagName("ul")[0].style.bottom='0%';

});


gitSkill.addEventListener("mouseover", () => {
    gitSkill.style.gridTemplate="60% 10%/1fr";
    gitSkill.getElementsByTagName("ul")[0].style.bottom='-100%';

});
gitSkill.addEventListener("mouseout", () => {
    gitSkill.style.gridTemplate="2fr 1fr 3fr/1fr";
    gitSkill.getElementsByTagName("ul")[0].style.bottom='0%';

});

reactSkill.addEventListener("mouseover", () => {
    reactSkill.style.gridTemplate="60% 10%/1fr";
    reactSkill.getElementsByTagName("ul")[0].style.bottom='-100%';

});
reactSkill.addEventListener("mouseout", () => {
    reactSkill.style.gridTemplate="2fr 1fr 3fr/1fr";
    reactSkill.getElementsByTagName("ul")[0].style.bottom='0%';

});

reduxSkill.addEventListener("mouseover", () => {
    reduxSkill.style.gridTemplate="60% 10%/1fr";
    reduxSkill.getElementsByTagName("ul")[0].style.bottom='-100%';

});
reduxSkill.addEventListener("mouseout", () => {
    reduxSkill.style.gridTemplate="2fr 1fr 3fr/1fr";
    reduxSkill.getElementsByTagName("ul")[0].style.bottom='0%';

});



// User Location greeting using Async await with fetch

async function LocationLocator(){
    try{
        let response=await fetch('https://ipapi.co/json/');
        const jsonResponse = await response.json();
        document.getElementById('locationCity').innerHTML=jsonResponse.city+'!';
    }
    catch{
        console.log("Unable to read your location but it's okay!")
    }
}

LocationLocator();

