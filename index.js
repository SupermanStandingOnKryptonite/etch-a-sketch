const sketchArea = document.querySelector(".sketch-area");

function createSquares() {
  const sketchSquares = document.createElement("div");
  sketchSquares.classList.add("square");
  sketchArea.appendChild(sketchSquares);
}

for (let i = 0; i < 16 * 16; i++) {
  createSquares();
}

const square = document.querySelectorAll(".square");

square.forEach((cell) =>
  cell.addEventListener("mouseenter", () => {
    let rand = Math.random() * 10;

    if (Math.round(rand) === 0) {
      cell.style.backgroundColor = "teal";
    } else if (Math.round(rand) === 1) {
      cell.style.backgroundColor = "coral";
    } else if (Math.round(rand) === 2) {
      cell.style.backgroundColor = "red";
    } else if (Math.round(rand) === 3) {
      cell.style.backgroundColor = "blue";
    } else if (Math.round(rand) === 4) {
      cell.style.backgroundColor = "white";
    } else if (Math.round(rand) === 5) {
      cell.style.backgroundColor = "orange";
    } else if (Math.round(rand) === 6) {
      cell.style.backgroundColor = "green";
    } else if (Math.round(rand) === 7) {
      cell.style.backgroundColor = "yellow";
    } else if (Math.round(rand) === 8) {
      cell.style.backgroundColor = "purple";
    } else if (Math.round(rand) === 9) {
      cell.style.backgroundColor = "black";
    } else if (Math.round(rand) === 10) {
      cell.style.backgroundColor = "fuchsia";
    }
  })
);
