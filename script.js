const container = document.querySelector(".container");
// created a div for the heading.
const heading = document.createElement("div");
heading.textContent = "Etch-a-Sketch";
heading.classList = "heading";
container.appendChild(heading);

// created a div for the input area.
const inputArea = document.createElement("div");
inputArea.classList = "inputArea";
//created a input box for size of grid.
const input = document.createElement("input");
input.setAttribute('type','number');
inputArea.appendChild(input);
// created a start button to start the grid.
const startButton = document.createElement("button");
startButton.textContent = "start";
startButton.classList = "button";
inputArea.appendChild(startButton);
// created a reset button for reseting the grid to default.
const resetButton = document.createElement("button");
resetButton.textContent = "reset";
resetButton.classList = "button";
inputArea.appendChild(resetButton);
container.appendChild(inputArea);

