
/* -----------------   Navigation Coloring Effect   ----------------------------*/

let allSections = document.querySelectorAll('.allSection');
let navLinks = document.querySelectorAll('.navbar ul a');

window.onscroll = () =>{

    allSections.forEach( section =>{
        let top = window.scrollY;
        let topoffset = section.offsetTop;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        
        if(top >= topoffset && top < topoffset + height){
            navLinks.forEach( link =>{
                link.classList.remove('active');
                document.querySelector('.navbar ul a[href*=' + id + ']').classList.add('active');
            })
        }
        
    });
}





// Menubar 
const menubtn = document.querySelector("#Navbar .menuBar");
const menubtnIcon = document.querySelector("#Navbar .menuBar i");

const active = document.querySelector(" #Navbar .hidden_navbar");

const togglenavbar = () =>{
  if(menubtnIcon.classList[1] == 'bx-menu'){
    menubtnIcon.classList.remove('bx-menu');
    menubtnIcon.classList.add('bx-menu-alt-right');

    active.style.display = 'block';
  }
  else{
    menubtnIcon.classList.remove('bx-menu-alt-right');
    menubtnIcon.classList.add('bx-menu');

    active.style.display = 'none';
  }
}

 menubtn.addEventListener('click', () => togglenavbar());



/* -------------------- Typing Animation -------------------*/

const TypingText = document.querySelector(".typed-text");
const AutoTyping = document.querySelector(".TypeCursor");
 
const textArray = ["the lover of Coding", "Web Developer", "Passionate Programmer",
                   "Tech Enthusiast"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2000; 
let textArrayIndex = 0;
let charIndex = 0;
 
function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!AutoTyping.classList.contains("typing")) AutoTyping.classList.add("typing");
    TypingText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    AutoTyping.classList.remove("typing");
      setTimeout(erase, newTextDelay);
  }
}
 
function erase() {
    if (charIndex > 0) {
    if(!AutoTyping.classList.contains("typing")) AutoTyping.classList.add("typing");
    TypingText.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    AutoTyping.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}
 
document.addEventListener("DOMContentLoaded", function() { 
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});



/*  ---------------------- Visibility of  About Tags ----------------------*/
let aboutTags = document.querySelectorAll('.aboutImage .aboutTags');











/* ------------------   Experience --------------------*/
const plusIconWork = document.querySelectorAll('#Experience .work button');
const SpanIconWork = document.querySelectorAll('#Experience .work button span');
const companyInfo = document.querySelectorAll('#Experience .CompanyInfo');


plusIconWork.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (companyInfo[index].style.display === 'flex') {
            companyInfo[index].style.display = 'none';
            SpanIconWork[index].innerHTML = "+";
        } 
        else {
            companyInfo.forEach(info => info.style.display = 'none');
            companyInfo[index].style.display = 'flex';
            SpanIconWork[index].innerHTML = "-";
        }
    });
});



