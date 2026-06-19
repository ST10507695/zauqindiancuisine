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

    document.getElementById(responseId).textContent =
        quantity + " x " + dishName + " added to order.";

    let listItem = document.createElement("li");
    listItem.classList.add("order-item");

    let itemText = document.createElement("span");
    itemText.textContent = quantity + " x " + dishName + " = R" + itemTotal;

    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", function () {
        total -= itemTotal;
        document.getElementById("orderTotal").textContent = "Order Total: R" + total;
        listItem.remove();
    });

    listItem.appendChild(itemText);
    listItem.appendChild(removeButton);

    document.getElementById("orderList").appendChild(listItem);

    document.getElementById("orderTotal").textContent =
        "Order Total: R" + total;
}
function openLightbox(imageSrc) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightboxImage").src = imageSrc;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
const specials = [
    {
        name: "Butter Chicken Special",
        price: "R95",
        description: "Creamy butter chicken served with rice."
    },
    {
        name: "Chicken Biryani Special",
        price: "R90",
        description: "Authentic fragrant chicken biryani."
    },
    {
        name: "Lamb Curry Special",
        price: "R125",
        description: "Traditional lamb curry with naan."
    }
];

function loadSpecials() {

    const container =
        document.getElementById("specialsContainer");

    specials.forEach(function(item) {

        const card = document.createElement("div");

        card.classList.add("special-card");

        card.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p><strong>${item.price}</strong></p>
        `;

        container.appendChild(card);
    });
}

window.onload = loadSpecials;       