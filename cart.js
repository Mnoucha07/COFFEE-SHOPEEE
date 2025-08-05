const cartItemsContainer = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

let orders = JSON.parse(localStorage.getItem("orders")) || [];
let total = 0;

if (orders.length === 0) {
  cartItemsContainer.innerHTML = "<p style='text-align:center;'></p>";
} else {
  orders.forEach((item, index) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("cart-item");

    const price = parseInt(item.price);
    total += price;

    itemElement.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <div>
        <h3>${item.title}</h3>
        <p>${item.price}</p>
        <button class="btn-delete" data-index="${index}"> Delete</button>
      </div>
    `;

    cartItemsContainer.appendChild(itemElement);
  });

  cartTotal.textContent = `Total: ${total} DA`;
  

  // أحداث الحذف الفردي
  const deleteButtons = document.querySelectorAll(".btn-delete");
  deleteButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const index = parseInt(e.target.dataset.index);
      orders.splice(index, 1);
      localStorage.setItem("orders", JSON.stringify(orders));
      location.reload();
    });
  });
}
function confirmOrder() {
  if (orders.length === 0) {
    alert("The cart is empty You can't confirm the order .");
    return;
  }

  // رسالة شكر
  alert(" Thank You and enjoy !");

  // (اختياري) تفرغ السلة
  localStorage.removeItem("orders");
  location.reload();
}


function clearCart() {
  localStorage.removeItem("orders");
  location.reload();
}


