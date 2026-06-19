function addToOrder() {
    let dish = document.getElementById("butterChicken").value;
    let quantity = document.getElementById("butterQuantity").value;

    document.getElementById("orderResponse").innerHTML =
        `Added ${quantity} × ${dish} to your order.`;
}
function addChickenToOrder() {
    let dish = document.getElementById("chickenCurry").value;
    let quantity = document.getElementById("chickenQuantity").value;

    document.getElementById("chickenOrderResponse").innerHTML =
        `Added ${quantity} × ${dish} to your order.`;
}
function addBunnyToOrder() {
    let dish = document.getElementById("bunnyChow").value;
    let quantity = document.getElementById("bunnyQuantity").value;

    document.getElementById("bunnyOrderResponse").innerHTML =
        `Added ${quantity} × ${dish} to your order.`;
}
function addBiryaniToOrder() {
    let dish = document.getElementById("biryaniDish").value;
    let quantity = document.getElementById("biryaniQuantity").value;

    document.getElementById("biryaniOrderResponse").innerHTML =
        `Added ${quantity} × ${dish} to your order.`;
}
function addLambToOrder() {
    let dish = document.getElementById("lambDish").value;
    let quantity = document.getElementById("lambQuantity").value;

    document.getElementById("lambOrderResponse").innerHTML =
        `Added ${quantity} × ${dish} to your order.`;
}
function addBeefToOrder() {
    let dish = document.getElementById("beefDish").value;
    let quantity = document.getElementById("beefQuantity").value;

    document.getElementById("beefOrderResponse").innerHTML =
        `Added ${quantity} × ${dish} to your order.`;
}
function addSeafoodToOrder() {
    let dish = document.getElementById("seafoodDish").value;
    let quantity = document.getElementById("seafoodQuantity").value;

    document.getElementById("seafoodOrderResponse").innerHTML =
        `Added ${quantity} × ${dish} to your order.`;
}
function addNaanToOrder() {
    let dish = document.getElementById("naanDish").value;
    let quantity = document.getElementById("naanQuantity").value;

    document.getElementById("naanOrderResponse").innerHTML =
        `Added ${quantity} × ${dish} to your order.`;
}
function addSnackToOrder() {
    let dish = document.getElementById("snackDish").value;
    let quantity = document.getElementById("snackQuantity").value;

    document.getElementById("snackOrderResponse").innerHTML =
        `Added ${quantity} × ${dish} to your order.`;
}
let total = 0;

function addToOrder(dishId, quantityId, responseId) {

    let dishSelect = document.getElementById(dishId);

    let dishName =
        dishSelect.options[dishSelect.selectedIndex].text;

    let price = Number(dishSelect.value);

    let quantity =
        Number(document.getElementById(quantityId).value);

    let itemTotal = price * quantity;

    total += itemTotal;

    document.getElementById(responseId).innerHTML =
        `${quantity} × ${dishName} added to order`;

    let item = document.createElement("li");
    item.textContent =
        `${quantity} × ${dishName}`;

    document.getElementById("orderList")
        .appendChild(item);

    document.getElementById("orderTotal").innerHTML =
        `Order Total: R${total}`;
}
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
    total += itemTotal;

    document.getElementById(responseId).innerHTML =
        `${quantity} × ${dishName} added to order`;

    let item = document.createElement("li");
    item.textContent = `${quantity} × ${dishName} = R${itemTotal}`;
    document.getElementById("orderList").appendChild(item);

    document.getElementById("orderTotal").innerHTML =
        `Order Total: R${total}`;
}