const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themTog = document.querySelector('.theme-tog');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})
themTog.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themTog.querySelector('span:nth-child(1)').classList.toggle('active');
    themTog.querySelector('span:nth-child(2)').classList.toggle('active');

})