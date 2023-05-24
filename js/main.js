window.onscroll = function() {myFunction()};

let navbar = document.querySelector(".navbar");

let sticky = navbar.offsetTop; //zorgt ervoor dat de navbar op de top van de website zit.

function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky") //wanneer je naar beneden scrollt, zorgt dit ervoor dat de navbar op je scherm blijft
    } else {
      navbar.classList.remove("sticky"); //als de navbar op de top zit haalt die de class weg
    }
  }

  document.querySelectorAll('#start').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({  //wanneer je op iets klikt in de navbar scrollt de website automatisch voor jou
            behavior: 'smooth' 
        });
    });
});

document.querySelectorAll('#trending').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

document.querySelectorAll('#newgames').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


const contact = document.querySelector(".contactus"); //buttons die je naar andere pages stuurt 

contact.addEventListener('click', contactus)
function contactus() {
window.location.href = "contact.html"
}


const callistoprotocol = document.querySelector(".callisto");

callistoprotocol.addEventListener('click', callisto)

function callisto() {
window.location.href = "callistoprotocol.html"
}

const minecraft = document.querySelector(".minecraft");
minecraft.addEventListener('click', mc)

function mc() {
  window.location.href ="minecraft.html"
}

const fortnite = document.querySelector(".fortnite");
fortnite.addEventListener('click', fn)

function fn() {
  window.location.href ="fortnite.html"
}