// select accordion element
const accordion = document.querySelector(".accordion").children;
const img1 = question1.getElementsByTagName("img")[0].src;
const img2 = "./assets/images/icon-minus.svg";

// go through accordion collection and apply onclick action on each Element
for (let question of accordion) {
  question.addEventListener("click", () => {
    const image = question.getElementsByTagName("img")[0];
    question.children[1].classList.toggle("hidden");

    if (image.src === img1) {
      image.src = img2;
    } else {
      image.src = img1;
    }
  });
}
