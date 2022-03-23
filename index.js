const review = document.querySelectorAll(".review > p");
const button = document.querySelector("button");
const content = document.querySelector(".container ");
let submitedReview = 0;
function check() {
  review.forEach((c) => {
    if (c.classList.contains("grey")) {
      c.classList.remove("grey");
    }
  });
  this.classList.add("grey");
  submitedReview = this.textContent;
  console.log(submitedReview);
}
function submitted() {
  content.innerHTML = `
   <div class="container submit">
   <img src="./images/illustration-thank-you.svg" alt="star" />
   <div class="submitContent">
      <span>
      You selected ${submitedReview} out of 5
      </span>
      <div>
      <h1>  Thank you!</h1>
      <p> We appreciate you taking the time to give a rating. If you ever need more support, 
      don’t hesitate to get in touch!</P>
      </div>
    </div>
   </div>
   `;
}
review.forEach((c) => c.addEventListener("click", check));
button.addEventListener("click", submitted);
