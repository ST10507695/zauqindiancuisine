let total = 0;

function addToOrder(dishId, quantityId, responseId) {
    let dishSelect = document.getElementById(dishId);
    let quantityInput = document.getElementById(quantityId);
    let orderList = document.getElementById("orderList");
    let orderTotal = document.getElementById("orderTotal");

    if (!dishSelect || !quantityInput || !orderList || !orderTotal) {
        alert("Order system error. Please check your HTML IDs.");
        return;
    }

    let dishName = dishSelect.options[dishSelect.selectedIndex].text;
    let price = Number(dishSelect.value);
    let quantity = Number(quantityInput.value);

    if (quantity < 1 || isNaN(quantity)) {
        alert("Please enter a quantity of at least 1.");
        return;
    }

    let itemTotal = price * quantity;
    total += itemTotal;

    if (document.getElementById(responseId)) {
        document.getElementById(responseId).textContent =
            quantity + " x " + dishName + " added to order.";
    }

    let listItem = document.createElement("li");
    listItem.classList.add("order-item");

    let itemText = document.createElement("span");
    itemText.textContent = quantity + " x " + dishName + " = R" + itemTotal;

    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", function () {
        total -= itemTotal;
        orderTotal.textContent = "Order Total: R" + total;
        listItem.remove();
    });

    listItem.appendChild(itemText);
    listItem.appendChild(removeButton);
    orderList.appendChild(listItem);

    orderTotal.textContent = "Order Total: R" + total;
}   