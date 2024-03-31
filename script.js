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
input.classList = "input";
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
resetButton.addEventListener('click',clearGrid);

//created a div for area to play the game.
const gameArea = document.createElement("div");
gameArea.classList = "gameArea";
container.appendChild(gameArea);
startButton.addEventListener('click',startGrid);

//created a div for credentials area.
const credentials = document.createElement("div");
credentials.classList = "credentials";
credentials.innerHTML = `created by :<a href ='https://github.com/AnandRaj2224'>anand raj</a>`
container.appendChild(credentials);

//function for starting the grid.
function startGrid (){
  const gameArea = document.querySelector(".gameArea");
  const input = document.querySelector(".input");
  gameArea.innerHTML = '';
  let value = input.value;
  if(value==='')  value =5;
  for(let i =0;i<value*value;i++)
  {
    let gridDimensions = 100 / value;
    const elements = document.createElement("div")
    elements.style.height = elements.style.width = `${gridDimensions}%`;
    elements.classList = "elements";
    gameArea.appendChild(elements);
    elements.addEventListener('mouseover',getColor);
  }
}
// function to get random colors for the grid.
function getColor (event){
const elements = event.target;
  const red = (Math.random()*255);
  const green = (Math.random()*255);
  const blue = (Math.random()*255);
  elements.style.backgroundColor =`rgb(${red},${green},${blue})`;
}
// function for reseting the grid to default.
function clearGrid(){
  const elements = document.querySelectorAll(".elements");
  elements.forEach(element => {
    element.style.backgroundColor = `rgb(0,0,0)`; 
  });
}
