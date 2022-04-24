const nav = document.querySelector('.nav');
const navbarBtn = document.querySelector('.navbar__btn');
const allNavItems = document.querySelectorAll('.nav__box-link')
const footerYear = document.querySelector('.footer__year');

const hadnleNav = () => {
	nav.classList.toggle('nav--active');

allNavItems.forEach(item=>{
    item.addEventListener('click',()=>{
        nav.classList.remove('nav--active');
    })
})

};

navbarBtn.addEventListener('click', hadnleNav);

const hadnleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

hadnleCurrentYear();