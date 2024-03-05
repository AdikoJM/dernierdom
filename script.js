let items = [];
let total = 0;

function addItem() {
  const itemName = prompt("Nom de l'article:");
  const itemPrice = parseFloat(prompt("Prix de l'article:"));

  if (itemName && !isNaN(itemPrice)) {
    const newItem = { name: itemName, price: itemPrice };
    items.push(newItem);
    updateCart();
  } else {
    alert("Veuillez entrer un nom et un prix valides.");
  }
}

function removeItem(index) {
  items.splice(index, 1);
  updateCart();
}

function updateCart() {
  const itemList = document.getElementById("item-list");
  const totalElement = document.getElementById("total");
  itemList.innerHTML = "";
  total = 0;

  items.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - $${item.price}`;
    const removeButton = document.createElement("button");
    removeButton.textContent = "Supprimer";
    removeButton.onclick = () => removeItem(index);
    listItem.appendChild(removeButton);
    itemList.appendChild(listItem);
    total += item.price;
  });

  totalElement.textContent = `Total: $${total.toFixed(2)}`;
}
