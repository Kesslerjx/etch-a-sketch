const MIN = 16;
const MAX = 100;

let rgb = false;

//Get the grid container
const gridContainer = document.querySelector('.grid-container');

//Get grid size input
const gridSize = document.querySelector('#grid-size');

//Setup clear button
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearGrid);

//Setup change button
const changeButton = document.querySelector('#set-grid-size');
changeButton.addEventListener('click', changeGrid);

//Setup reset button
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', resetGrid);

//Setup RGB button
const rgbButton = document.querySelector('#rgb');
rgbButton.addEventListener('click', function(event) {

    if(rgb) {
        rgb = false;
        event.target.textContent = "RGB";
    } else {
        rgb = true;
        event.target.textContent = "Black/White";
    }

    console.log(rgb);
});

//Draw grid
drawGrid(16);

function resetGrid() {

    console.log("Resetting grid back to 16");

    //Set value
    gridSize.value = 16;

    //Change grid
    changeGrid();
}

function changeGrid() {

    //Only change grid if input is within 16 and 100
    if (gridSize.value >= 16 && gridSize.value <= 100) {

        console.log("Changing grid size to " + gridSize.value);

        //Remove divs
        while(gridContainer.firstElementChild) {
            gridContainer.removeChild(gridContainer.lastElementChild);
        }
        
        //redraw grid
        drawGrid(gridSize.value);
    }
}

function drawGrid(number) {

    console.log("Drawing grid based on " + number);

    //Get height and width of the squares
    let containerWidth = gridContainer.clientWidth; //Using clientWidth to not include border
    let borderWidth = 1;
    let sideLength = (containerWidth / number);
    let numOfBoxes = number * number;

    //Create array of div elements
    for(i=0; i < numOfBoxes; i++) {
        //Create div
        const div = document.createElement('div');

        //Style the div
        div.style.width = `${sideLength}px`;
        div.style.height = `${sideLength}px`;
        div.style.border = `${borderWidth}px solid black`;
        div.style.boxSizing = "border-box"; //Border box to account for padding and border

        //Add event listener for hover
        div.addEventListener('mouseover', changeColor);

        //Append to grid container
        gridContainer.append(div);
    }
}

function clearGrid() {

    console.log("Clearing grid");

    //Get all boxes within the grid container
    const boxes = gridContainer.querySelectorAll("*");

    //Set color back to white
    boxes.forEach(box => box.style.backgroundColor = "white");
}

//Change color of the box within the grid
function changeColor(event) {

    if(rgb) {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        event.target.style.backgroundColor = "#" + randomColor;
    } else {
        event.target.style.backgroundColor = "black";
    }


}