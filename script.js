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

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("enquiryName").value;
        let service = document.getElementById("service").value;

        document.getElementById("enquiryResponse").textContent =
            "Thank you, " + name + ". Your enquiry about " + service +
            " has been received. We will contact you with cost and availability.";
    });
}   
// ENQUIRY FORM VALIDATION
const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("enquiryName").value.trim();
        let email = document.getElementById("enquiryEmail").value.trim();
        let phone = document.getElementById("enquiryPhone").value.trim();
        let service = document.getElementById("service").value;
        let message = document.getElementById("enquiryMessage").value.trim();
        let response = document.getElementById("enquiryResponse");

        if (name.length < 2) {
            response.textContent = "Please enter your full name.";
            return;
        }

        if (!email.includes("@")) {
            response.textContent = "Please enter a valid email address.";
            return;
        }

        if (!/^[0-9]{10}$/.test(phone)) {
            response.textContent = "Phone number must be 10 digits.";
            return;
        }

        if (service === "") {
            response.textContent = "Please select an enquiry type.";
            return;
        }

        if (message.length < 10) {
            response.textContent = "Message must be at least 10 characters.";
            return;
        }

        response.textContent =
            "Thank you, " + name + ". Your enquiry about " + service +
            " has been received. We will contact you with cost and availability.";
    });
}   
// CONTACT FORM VALIDATION + AJAX SIMULATION
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("contactName").value.trim();
        let email = document.getElementById("contactEmail").value.trim();
        let phone = document.getElementById("contactPhone").value.trim();
        let messageType = document.getElementById("messageType").value;
        let message = document.getElementById("contactMessage").value.trim();
        let response = document.getElementById("contactResponse");

        if (name.length < 2) {
            response.textContent = "Please enter your full name.";
            return;
        }

        if (!email.includes("@")) {
            response.textContent = "Please enter a valid email address.";
            return;
        }

        if (!/^[0-9]{10}$/.test(phone)) {
            response.textContent = "Phone number must be 10 digits.";
            return;
        }

        if (messageType === "") {
            response.textContent = "Please select a message type.";
            return;
        }

        if (message.length < 10) {
            response.textContent = "Message must be at least 10 characters.";
            return;
        }

        response.textContent = "Sending message...";

        setTimeout(function() {
            response.textContent =
                "Thank you, " + name + ". Your " + messageType +
                " has been prepared and submitted successfully.";
        }, 1000);
    });
}   