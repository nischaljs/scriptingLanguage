let registeredParticipants = [];

const form = document.getElementById("form");
const ul = document.getElementById("unorderedlist");
const totalParticipantsElement = document.getElementById("totalParticipants");
const toast = document.querySelector("#toast");
const emailInput = document.getElementById("email");
const tooltip = document.createElement("div");

tooltip.textContent = "Enter a valid email address. Your email address will be the one we will use to contact you";
tooltip.style.position = "absolute";
tooltip.style.width = '250px';
tooltip.style.backgroundColor = "#fff";
tooltip.style.border = "1px solid #ccc";
tooltip.style.padding = "5px";
tooltip.style.borderRadius = "5px";
tooltip.style.display = "none";
tooltip.style.fontSize = "12px";
tooltip.style.color = "#555";

document.body.appendChild(tooltip);

emailInput.addEventListener("focus", (e) => {
    const rect = e.target.getBoundingClientRect();
    tooltip.style.top = `${rect.top - 30}px`;
    tooltip.style.left = `${rect.left}px`;
    tooltip.style.display = "block";
});

emailInput.addEventListener("blur", () => {
    tooltip.style.display = "none";
});

form.addEventListener("mouseover", changeBackgroundOfPage);
form.addEventListener("mouseleave", () => {
    form.style.backgroundColor = "";
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!validateFormData(name, email)) {
        alert("Please fill out all fields correctly.");
        return;
    }

    registeredParticipants.push(name);

    form.reset();
    addNamestoUI(name);
    updateTotalParticipants(registeredParticipants);
    showToast();
});

function addNamestoUI(name) {
    const newLi = document.createElement("li");
    newLi.textContent = name;
    ul.append(newLi);
}

function validateFormData(name, email) {
    return name.length > 0 && email.length > 0;
}

function updateTotalParticipants(participants) {
    totalParticipantsElement.querySelector("h6").textContent = `Total Participants: ${participants.length}`;
}

function showToast() {
    toast.style.display = "block";
    setTimeout(() => {
        toast.style.display = "none";
    }, 3000);
}

function changeBackgroundOfPage() {
    form.style.backgroundColor = "#fd5c50";
}

updateTotalParticipants(registeredParticipants);
