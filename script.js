const menu = document.querySelector("#menu");
const headerLink = document.querySelector(".header-link-btn-block");

function onClick() {
  menu.classList.toggle("icon");
  headerLink.classList.toggle("change");
}

const nav = document.querySelector(".nav");
const practice = document.querySelector(".practice-section");

const initialCoords = practice.getBoundingClientRect();
console.log(initialCoords);
window.addEventListener("scroll", function (e) {
  // console.log(window.scrollY);

  if (window.scrollY > initialCoords.top) {
    nav.classList.add("sticky");
    console.log("a");
    // nav.style.background = 'transparent';
  } else nav.classList.remove("sticky");
});

//////////////  reveal section

const allSection = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.4,
});
allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

//////////////////////////////////////////////////////////////  slider

const card = document.querySelectorAll(".product-card");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

// product = document.querySelector(".product-card-block");
// product.style.transform = "scale(0.4)";
// product.style.overflow = "visible";

maxCard = card.length + 1;
let curCard = 1;

card.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

const goToCard = function (curCards) {
  card.forEach((s, i) => {
    i++;
    s.style.transform = `translateX(${100 * (i - curCards)}%)`;
  });
};

const previousBtn = function () {
  if (curCard === 1) {
    curCard = maxCard + 1;
  } else {
    curCard -= 2;
  }
  goToCard(curCard);
};

const nextBtn = function () {
  if (curCard === maxCard + 1) {
    curCard = 1;
  } else {
    curCard += 2;
  }
  goToCard(curCard);
};

btnLeft.addEventListener("click", previousBtn);
btnRight.addEventListener("click", nextBtn);

document.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.key === "ArrowRight") nextBtn();
  // if (e.key === "ArrowUp") nextBtn();
  if (e.key === "ArrowLeft") previousBtn();
  // if (e.key === "ArrowDown") previousBtn();
});
