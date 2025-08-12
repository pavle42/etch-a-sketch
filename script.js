const SCREEN_HEIGHT = window.innerHeight - 100;

const container = document.getElementById("container");
const pickButton = document.getElementById("pick-button");
pickButton.addEventListener("click", () => {
    createNewGrid(prompt("Pick the new grid size: "));
});

function createNewGrid(numberOfBoxes) {
    if (numberOfBoxes > 100) {
        alert("Please enter a number less then or equal to 100");
        return;
    }

    if (numberOfBoxes % 1 != 0 || numberOfBoxes <= 0) {
        alert("Please enter a valid number.")
        return;
    }

    container.replaceChildren();

    let boxes = [];
    let boxSize = SCREEN_HEIGHT / numberOfBoxes;

    for (let i = 0; i < numberOfBoxes; i++) {
        let row = [];
        for (let j = 0; j < numberOfBoxes; j++) {
            const box = document.createElement("div");
            box.style.height = boxSize + "px";
            box.style.width = boxSize + "px";

            box.addEventListener("mouseenter", () => {
                box.style.backgroundColor = "black";
            });

            row.push(box);
        }
        boxes.push(row);
    }

    for (let i = 0; i < boxes.length; i++) {
        const rowDiv = document.createElement("div");
        container.appendChild(rowDiv);
        for (let j = 0; j < boxes[i].length; j++) {
            rowDiv.appendChild(boxes[i][j]);
        }
    }
}

createNewGrid(16);