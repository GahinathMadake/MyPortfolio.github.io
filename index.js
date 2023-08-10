
const menubtn = document.querySelector(".mobile_menu")
const active = document.querySelector(".header")

 const togglenavbar = () =>{
  active.classList.toggle('active')
 }
 menubtn.addEventListener('click', () => togglenavbar());



const text = document.querySelector(".second_text");
const textLoad = () => {             
    setTimeout(() => {                 
        text.textContent = "the lover of Coding";             
    }, 0);     

    setTimeout(() => {                 
        text.textContent = "Web Developer";
    }, 6000);                               // 1s = 1000 millisecond             
    
    setTimeout(() => {                 
        text.textContent = "Passionate Programmer";             
    }, 12000);
    
    setTimeout(() => {                 
        text.textContent = "Tech Enthusiast";             
    }, 18000);
}                  
    
    textLoad();         
    setInterval(textLoad,24000);           // define the next iterate of the loop interval




