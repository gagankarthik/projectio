const mobile_nav = document.querySelector('.mobile-navbar-btn');
const nav_header = document.querySelector('.header');

mobile_nav.addEventListener('click',()=>toggleNavbar());

const toggleNavbar = ()=>{
    nav_header.classList.toggle('active');
};