/* 슬라이드 */

const slideUl = document.querySelector(".slideUl");
const slideLi = document.querySelectorAll(".slideLi");

const slideBtn = document.querySelectorAll(".slideBtns li button");

console.log(slideBtn);
slideBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    slideUl.style.transform = `translate(${index * -100}%)`;
  });
});
