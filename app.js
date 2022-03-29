const sideMenu=document.querySelector("aside");
const menuBtn=document.querySelector("#menu-btn");
const closeBtn=document.querySelector("#close-btn");
const themeTogller=document.querySelector(".theme-toggler")


menuBtn.addEventListener("click",()=>{
    sideMenu.style.display="block";
})

closeBtn.addEventListener("click",()=>{
    sideMenu.style.display="none";
})


themeTogller.addEventListener("click",()=>{
    document.body.classList.toggle('dark-theme');
    themeTogller.querySelector('span:nth-child(1)').classList.toggle('active');
    themeTogller.querySelector('span:nth-child(2)').classList.toggle('active');

})