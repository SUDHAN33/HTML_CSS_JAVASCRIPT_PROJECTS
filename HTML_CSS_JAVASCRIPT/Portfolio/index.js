let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset+height ){
        navLinks.forEach(links => {
            if(id != 'services'){
              let text = document.querySelector(".txt");
              text.classList.remove('find-more');
              document.querySelector('.find-more-btn').innerHTML = 'Find More';
              let text2 = document.querySelector(".txt2");
              text2.classList.remove('find-more2');
              document.querySelector('.find-more-btn2').innerHTML = 'Find More';
              let text3 = document.querySelector(".txt3");
              text3.classList.remove('find-more3');
              document.querySelector('.find-more-btn3').innerHTML = 'Find More';
              let text4 = document.querySelector(".txt4");
              text4.classList.remove('find-more4');
              document.querySelector('.find-more-btn4').innerHTML = 'Find More';
            }
            if(id!='about'){
               let span = document.querySelector('section div h3 span');
               span.classList.remove('.multiple-row');
            }else{
               let span = document.querySelector('section div h3 span');
               span.classList.add('.multiple-row');
            }
            
            links.classList.remove('active');
            document.querySelector('header nav a[href*='+ id +']').classList.add('active');
        });
        };
    });
};



const findMore = document.querySelector('.find-more-btn');
const txt = document.querySelector('.txt');
findMore.addEventListener(
    'click',(e) =>{
     txt.classList.toggle('find-more')
     if(findMore.innerText === "Find More"){
        findMore.innerText = "Find Less";
     }else{
        findMore.innerText = "Find More"
     }
});

const findMore2 = document.querySelector('.find-more-btn2');
const txt2 = document.querySelector('.txt2');
findMore2.addEventListener(
    'click',(e) =>{
     txt2.classList.toggle('find-more2')
     if(findMore2.innerText === "Find More"){
        findMore2.innerText = "Find Less";
     }else{
        findMore2.innerText = "Find More";
     }
});

const findMore3 = document.querySelector('.find-more-btn3');
const txt3 = document.querySelector('.txt3');
findMore3.addEventListener(
    'click',(e) =>{
     txt3.classList.toggle('find-more3')
     if(findMore3.innerText === "Find More"){
        findMore3.innerText = "Find Less";
     }else{
        findMore3.innerText = "Find More";
     }
});

const findMore4 = document.querySelector('.find-more-btn4');
const txt4 = document.querySelector('.txt4');
findMore4.addEventListener(
    'click',(e) =>{
     txt4.classList.toggle('find-more4')
     if(findMore4.innerText === "Find More"){
        findMore4.innerText = "Find Less";
     }else{
        findMore4.innerText = "Find More";
     }
});


let header = document.querySelector('header');
header.classList.toggle('sticky',window.scrollY > 100);

menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');

ScrollReveal({
     //reset: true ,
     distance :'80px',
     duration : 2000,
     delay : 200
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });


const typed = new Typed('.multiple-text',{
   strings: ['Frontend Developer','Flutter Developer','UI Designer','Competitive Coder'],
   typeSpeed : 100,
   backSpeed : 100,
   backDelay : 1000,
   loop : true,
});



const titles = new Typed('.multiple-row',{
    strings: ['Educational Qualification','Frontend Developer','Flutter Developer','UI Designer and Competitive Coder'],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 31000,
    loop : true,
 });


 const details = new Typed('.multiple-details',{
    strings: ['I am pursuing my Engineering Bachelor\'s degree in Electronics and Communication in Sri Krishna College of Engineering and Technology.','I have knowledge in frontend technologies such as HTML, CSS, JavaScript and React Js and created cool portfolio and a crypto tracker.',
    'Using flutter,i created many nice apps such as BMI Calculator, Weather App, Dice Game and Plant Identifier.',
    'AS UI designer i have good knowledge in Figma, Canva and word tools.',
    'In competitve Programming have a good background in Java and OOPS concept.'],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop : true,
 });
