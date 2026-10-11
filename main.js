const colorInputs = document.querySelectorAll('input[name="productColor"]');
const selectedColor = document.getElementById("selectedColor");
const productImage = document.getElementById("productImage");
const productVisual = document.querySelector(".shop-visual");
const quantitySelect = document.getElementById("productQuantity");
const addToBag = document.getElementById("addToBag");
const bagCount = document.getElementById("bagCount");
const bagMessage = document.getElementById("bagMessage");

const colorImages = {
  Midnight: "images/midnight.jpg.webp",
  Lavender: "images/lavender.jpg.webp",
  Sand: "images/sand.jpg.webp"
};

let itemCount = 0;

colorInputs.forEach((input) => {
  input.addEventListener("change", () => {
    const color = input.value;

    selectedColor.textContent = color;
    productImage.src = colorImages[color];
    productImage.alt = `SONIQ One headphones in ${color}`;
    productVisual.dataset.color = color;
    bagMessage.textContent = "";
  });
});

addToBag.addEventListener("click", () => {
  const quantity = Number(quantitySelect.value);
  const color = document.querySelector(
    'input[name="productColor"]:checked'
  ).value;

  itemCount += quantity;
  bagCount.textContent = itemCount;

  bagMessage.textContent =
    `${quantity} × SONIQ One (${color}) added to your bag.`;
});

const newsletterForm = document.getElementById("newsletterForm");
const newsletterEmail = document.getElementById("newsletterEmail");
const newsletterMessage = document.getElementById("newsletterMessage");

newsletterEmail.addEventListener("input", () => {
  newsletterMessage.textContent = "";
});

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  newsletterMessage.textContent =
    "Thanks! This is a demo form, so your email hasn’t been submitted.";

  newsletterForm.reset();
});