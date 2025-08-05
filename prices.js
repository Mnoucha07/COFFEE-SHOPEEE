// price list based on product names
const prices = {
  "ESPRESSO": "300 DA",
  "AMERICANO": "280 DA",
  "TURKCOFFEE": "250 DA",
  "FLAT WHITE": "350 DA",
  "ICED COFFEE": "320 DA",
  "COLD BREW": "360 DA",
  "ICE MOCHA": "380 DA",
  "CARAMEL LATTE": "400 DA",
  "AFFOGATO": "450 DA",
  "MACARONS": "150 DA",
  "ECLAIR": "200 DA",
  "MILLE-FEUILLE": "300 DA",
  "CANELé": "220 DA",
};


// loop through all cards and inject prices
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const titleElement = card.querySelector(".headerLink a");
    if (titleElement) {
      const name = titleElement.textContent.trim().toUpperCase();
      const price = prices[name];

      if (price) {
        const priceElement = document.createElement("p");
        priceElement.textContent = price;
        priceElement.style.fontWeight = "bold";
        priceElement.style.color = "#000000ff";
        card.querySelector(".cardInfo").appendChild(priceElement);
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const modal = document.getElementById("productModal");
  const modalImg = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalPrice = document.getElementById("modalPrice");
  const closeBtn = document.querySelector(".close-btn");

  // نمنع الروابط من التصرف العادي
  const links = document.querySelectorAll(".card a");
  links.forEach(link => {
    link.addEventListener("click", e => e.preventDefault());
  });

  // كليك على الكارت كامل
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const title = card.querySelector(".headerLink a").textContent.trim().toUpperCase();
      const imgSrc = card.querySelector("img").src;
      const price = prices[title] || "Price not available";

      modalImg.src = imgSrc;
      modalTitle.textContent = title;
      modalPrice.textContent = price;
      modal.style.display = "flex";
    });
  });

  // غلق المودال
 

  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const modal = document.getElementById("productModal");
  const modalImg = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalPrice = document.getElementById("modalPrice");
  const addToOrderBtn = document.getElementById("addToOrderBtn");

  cards.forEach(card => {
    const link = card.querySelector("a");
    if (link) link.addEventListener("click", e => e.preventDefault());

    card.addEventListener("click", () => {
      const title = card.querySelector("a").textContent.trim().toUpperCase();
      const img = card.querySelector("img").src;
      modalImg.src = img;
      modalTitle.textContent = title;
      modalPrice.textContent = prices[title] || "N/A";
      modal.style.display = "flex";
    });
  });

  addToOrderBtn.addEventListener("click", () => {
    const product = {
      title: modalTitle.textContent,
      price: modalPrice.textContent,
      image: modalImg.src
    };

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(product);
    localStorage.setItem("orders", JSON.stringify(orders));

    modal.style.display = "none";
    alert("Your Order is in the cart");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});




