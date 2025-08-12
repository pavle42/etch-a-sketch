const SCREEN_HEIGHT = window.innerHeight;
const boxSize = SCREEN_HEIGHT / 16 - 2;

let boxes = [];
const container = document.getElementById("container");

for (let i = 0; i < 16; i++) {
    let row = [];
    for (let j = 0; j < 16; j++) {
        const box = document.createElement("div");
        box.style.height = boxSize + "px";
        box.style.width = boxSize + "px";
        box.style.border = "thin solid white";
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