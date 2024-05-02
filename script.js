const container = document.querySelector(".container");
const column = document.createElement("div");
const square = document.createElement("div");
const button = document.querySelector("button");

column.classList = "column";
square.classList = "square";

const createGrid = function(size) {
    container.replaceChildren();
    column.replaceChildren();
    for (let i = 0; i < size; i++) {
        column.append(square.cloneNode(true));
    };
    for (let i = 0; i < size; i++) {
        container.append(column.cloneNode(true))
    };
    [...document.querySelectorAll('.square')].forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
        });
         });
};

createGrid(16);

button.addEventListener("click", () => {
    let size = prompt("How many boxes per row?");
    while (size < 0 || size > 100) {
        size = prompt("Oops! Value must be between 1 and 100. How many boxes per row?")
    }
    createGrid(size);
});

