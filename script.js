let total = 0;

function addToOrder(dishId, quantityId, responseId) {
    let dishSelect = document.getElementById(dishId);
    let dishName = dishSelect.options[dishSelect.selectedIndex].text;
    let price = Number(dishSelect.value);
    let quantity = Number(document.getElementById(quantityId).value);

    if (quantity < 1) {
        alert("Please enter a quantity of at least 1.");
        return;
    }

    let itemTotal = price * quantity;
    total = total + itemTotal;

    document.getElementById(responseId).textContent =
        quantity + " x " + dishName + " added to order.";

    let listItem = document.createElement("li");

    listItem.innerHTML =
        quantity + " x " + dishName + " = R" + itemTotal +
        ' <button type="button" onclick="removeItem(this, ' + itemTotal + ')">Remove</button>';

    document.getElementById("orderList").appendChild(listItem);

    document.getElementById("orderTotal").textContent =
        "Order Total: R" + total;
}

function removeItem(button, itemTotal) {
    total = total - itemTotal;

    button.parentElement.remove();

    document.getElementById("orderTotal").textContent =
        "Order Total: R" + total;
}