let steam = document.querySelector('.callistosteam')
steam.addEventListener('click', buy)

function buy() {
   window.location.href = "https://store.steampowered.com/app/1544020/The_Callisto_Protocol";
}   

let back = document.querySelector('.back')
back.addEventListener('click', home)

function home() {
    window.location.href = "index.html"
}


