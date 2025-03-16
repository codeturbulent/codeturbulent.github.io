function showsocial() {
  document.getElementById("inner").style.display = "block";
  document.getElementById("socialshow").style.display = "none";
  document.getElementById("socialhide").style.display = "block";
}
function hidesocial() {
  document.getElementById("inner").style.display = "none";
  document.getElementById("socialshow").style.display = "block";
  document.getElementById("socialhide").style.display = "none";
}
var typing = new Typed("#changing", {
  strings: [
    " Web Designer",
    " Freelancer",
    " Fullstack Dev",
    " Web Developer",
    " Student",
  ],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true,
});

const cards = document.querySelectorAll(".card");
const arrows = document.querySelectorAll(".arrow-left, .arrow-right");
let currentCardIndex = 0;

function showCard(index) {
  document.getElementById("active").removeAttribute("id");
  cards[index].setAttribute("id", "active");
  cards[index].scrollIntoView()
}

function showNextCard() {
  currentCardIndex = (currentCardIndex + 1) % cards.length;
  showCard(currentCardIndex);
}

function showPreviousCard() {
  currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
  showCard(currentCardIndex);
}

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (event) => {
    if (event.target.classList.contains("arrow-left")) {
      showPreviousCard();
    } else {
      showNextCard();
    }
  });
});


function loadimg() {
  int = Math.floor(Math.random() * (7 - 1)) + 1
  var box = document.getElementById("meimg")
  box.innerHTML = `<img src="contents/images/me/me${int}.png" height="300px" alt="">`
}
loadimg()
