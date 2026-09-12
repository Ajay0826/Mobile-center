// const filterButtons = document.querySelectorAll(".filter-button");
// const productCards = document.querySelectorAll(".product-card");

// filterButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const category = button.dataset.filter;

//     filterButtons.forEach((item) =>
//       item.classList.toggle("active", item === button),
//     );

//     productCards.forEach((card) => {
//       const showCard = category === "all" || card.dataset.category === category;
//       card.classList.toggle("hidden", !showCard);
//     });
//   });
// });

// document
//   .querySelector(".newsletter-form")
//   ?.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const button = event.currentTarget.querySelector("button");
//     if (!button) return;

//     button.textContent = "Subscribed";
//     button.disabled = true;
//   });
