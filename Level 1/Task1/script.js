
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      } else {
          entry.target.classList.remove('show');
      }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show-image');
      } else {
          entry.target.classList.remove('show-image');
      }
  });
});

const hiddenImages = document.querySelectorAll('.hidden-image');
hiddenImages.forEach((el) => imageObserver.observe(el));

const myButton1=document.getElementById("myButton1");
const myImg1=document.getElementById("myImg1");
myButton1.addEventListener("click",event=>{
    if(myImg1.style.display==="none"){
        myImg1.style.display="block";
        myButton1.textContent="Hide";
    }
    else{
        myImg1.style.display="none";
        myButton1.textContent="Show";
    }
});
const myButton2=document.getElementById("myButton2");
const myImg2=document.getElementById("myImg2");
myButton2.addEventListener("click",event=>{
    if(myImg2.style.display==="none"){
        myImg2.style.display="block";
        myButton2.textContent="Hide";
    }
    else{
        myImg2.style.display="none";
        myButton2.textContent="Show";
    }
});
const myButton3=document.getElementById("myButton3");
const myImg3=document.getElementById("myImg3");
myButton3.addEventListener("click",event=>{
    if(myImg3.style.display==="none"){
        myImg3.style.display="block";
        myButton3.textContent="Hide";
    }
    else{
        myImg3.style.display="none";
        myButton3.textContent="Show";
    }
});
const myButton4=document.getElementById("myButton4");
const myImg4=document.getElementById("myImg4");
myButton4.addEventListener("click",event=>{
    if(myImg4.style.display==="none"){
        myImg4.style.display="block";
        myButton4.textContent="Hide";
    }
    else{
        myImg4.style.display="none";
        myButton4.textContent="Show";
    }
});
const myButton5=document.getElementById("myButton5");
const myImg5=document.getElementById("myImg5");
myButton5.addEventListener("click",event=>{
    if(myImg5.style.display==="none"){
        myImg5.style.display="block";
        myButton5.textContent="Hide";
    }
    else{
        myImg5.style.display="none";
        myButton5.textContent="Show";
    }
});