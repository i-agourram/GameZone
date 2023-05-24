let back = document.querySelector('.back')
back.addEventListener('click', home)

function home() {
    window.location.href = "index.html"
}


let buy = document.querySelector('.buymc')
buy.addEventListener('click', buymc)

function buymc() {
   window.location.href = "https://www.minecraft.net/en-us/get-minecraft";
}   