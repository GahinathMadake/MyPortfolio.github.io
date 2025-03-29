
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





/* ------------------   Project Display --------------------*/

const projects = [

  // -------  Shareplate  -------
  {
    id: 6,
    title: "SharePlate",
    description: "SharePlate is a platform designed to reduce food waste by connecting NGOs with surplus food. It sends real-time alerts based on food expiration and travel time, ensuring quick redistribution. The platform also optimizes logistics by displaying real-time routes and calculating distances for efficient coordination between donors and NGOs.",
    image: "./assets/Projects/Shareplate.png",
    link: "https://techathon-frontend-tau.vercel.app/"
  },

   // -------  Digital Portfolio  -------
   {
    id: 5,
    title: "Digital Portfolio",
    description: "My professional portfolio is designed to showcase my skills, experience, and projects in a simple and organized way. It highlights my work in web development and problem-solving, helping others understand my expertise. It also makes it easy for professionals to connect with me for collaborations and new opportunities.",
    image: "./assets/Projects/Portfolio.png",
    link: "/"
  },

  // -------  CODECHEF TechFest  -------
  {
    id: 4,
    title: "CODECHEF Techfest",
    description: "I created a website for the CODECHEF Techfest to promote events like CODESPRINT and Pair Programming. It allows participants to register, view event details, and learn about club members. The site also provides support from student coordinators to help participants with any questions during the registration process.",
    image: "./assets/Projects/CODECHEF2024.png",
    link: "https://codechefmitaoe.netlify.app/"
  },

  // ------- JavaScript Projects -------
  {
    id: 3,
    title: "JavaScript Projects",
    description: "I believe in transforming ideas into visually appealing and functional websites that provide an digital user experience. My Animated Portfolio showcases my skills and projects through interactive design and smooth animations. With a focus on creativity and practicality, my portfolio reflects my passion for modern, user-friendly web development and engaging UI/UX design.",
    image: "./assets/Projects/JS Projects.png",
    link: "https://gahinathmadake.github.io/JavaScript-Projects/"
  },

  // ------- CODECHEF Hiring 2023 -------
  {
    id: 2,
    title: "CODECHEF Hiring 2023",
    description: "The CODECHEF Hiring Website highlights the benefits of joining the club by showcasing past events, achievements, and contributions. It also provides a detailed list of official members, making it easier for new applicants to understand the club’s structure and impact. This platform helps in recruiting passionate and skilled members efficiently.",
    image: "./assets/Projects/CodeChef Hiring.png",
    link: "https://gahinathmadake.github.io/Codechef-Hiring.github.io/"
  },

  // ------- Personal Portfolio -------
  {
    id: 1,
    title: "Personal Portfolio",
    description: "I believe in transforming ideas into visually appealing and functional websites that provide an digital user experience. My Animated Portfolio showcases my skills and projects through interactive design and smooth animations. With a focus on creativity and practicality, my portfolio reflects my passion for modern, user-friendly web development and engaging UI/UX design.",
    image: "./assets/Projects/myPortfolio.png",
    link: "https://gahinathmadake.github.io/Portfolio.github.io/"
  }
];


function renderProjects() {
  const projectsContainer = document.querySelector('.project.display');
  
  projectsContainer.innerHTML = projects.map(project => `
    <div class="expcs">
      <img width='100%' src="${project.image}" loading="lazy" alt="${project.title}">
      
      <div class="exp_cont">
        <div class="experience_content">
          <h1>${project.title}</h1>
          <p>${project.description}</p>
        </div>

        <div class="prButton">
          <button>
            <a href="${project.link}" target="_blank">Check</a>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderProjects);



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



