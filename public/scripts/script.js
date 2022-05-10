const menu = document.querySelector("#hamburger");
const btns = document.querySelectorAll("#hamburgerCard");
const cards = document.querySelectorAll(".menuCard");

menu.addEventListener("click", function toggleMenu() {
  const ul = document.querySelector(".routers");
  ul.classList.toggle("active");
});
let ma;
btns.forEach((btn) => {
  let qtdCards = cards.length;
  cards.forEach((card) => {
    card.classList.toggle("menuAcitve");
    const uls = document.querySelectorAll(".menuAcitve");
    uls.forEach((ul) => {
      btn.addEventListener("click", function toggleMenuCard() {
        ma = card
        if(card.id == 'card4'){
          document.querySelector("#card4").style.visibility = "visible";       
        }     
      });
    });
  });
});



const closeAlert = () => {
  const close = document.querySelector("#close");
  const message = document.querySelector(".message");

  close.addEventListener("click", () => {
    message.style.display = "none";
  });

  setTimeout(() => {
    message.style.display = "none";
  }, 5000);
};


closeAlert()