// Get the navbar element
let navbar=document.getElementById('navbar');

// Function to handle scroll event
 window.addEventListener('scroll',()=>{
 if (window.scrollY >70)
 {
    navbar.classList.add('scrolled');//Add 'scrolled' class when scrolled more than 50px
 }else{
    navbar.classList.remove('scrolled');//Remove 'scrolled' class when at top
 }
 });