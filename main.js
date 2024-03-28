const titleElement = document.getElementById("title");
const describeElement = document.getElementById("describe");
const todoForm = document.getElementById("todo-form");
const deleteElement = document.getElementById("delete");
const card = document.getElementById("card");

todoForm.addEventListener("submit", (e) => {
    e.preventDefault(); 
    createCard();
});

deleteElement.addEventListener("click", () => {
    eraseAllCards();
});

function createCard() {
    const title = titleElement.value.toUpperCase();

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("task-card");

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = title;

    const deleteButton = createButton('Deletar Tarefa', 'delete-button');

    cardContainer.appendChild(cardTitle);
    cardContainer.appendChild(deleteButton);
    card.appendChild(cardContainer);

    deleteButton.addEventListener("click", () => {
        card.removeChild(cardContainer);
    });

    clearInput();
}

function eraseAllCards() { 
    card.innerHTML = "";
}

function createButton(buttonLabel, buttonClass) {
    const button = document.createElement("button");
    button.classList.add(buttonClass);
    button.textContent = buttonLabel;
    return button;
}

function clearInput() {
    titleElement.value = "";
}