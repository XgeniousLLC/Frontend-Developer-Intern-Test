const addToCart = () => {
  alert("Product added to cart!");
};

const cardsContainerEl = document.getElementById("cardsContainer");
cardsContainerEl.addEventListener(
  "mouseenter",
  (e) => {
    if (e.target && e.target.classList.contains("card")) {
      e.target.style.border = "1px solid gray";
    }
    if (e.target && e.target.classList.contains("button")) {
      e.target.style.background = "black";
      e.target.style.color = "white";
    }
  },
  true
);

cardsContainerEl.addEventListener(
  "mouseleave",
  (e) => {
    if (e.target && e.target.classList.contains("card")) {
      e.target.style.border = "1px solid transparent";
    }
    if (e.target && e.target.classList.contains("button")) {
      e.target.style.background = "transparent";
      e.target.style.color = "black";
    }
  },
  true
);
